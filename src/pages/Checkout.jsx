import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
    const { cartItems } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

const handleOrder = async (e) => {
    e.preventDefault();

    console.log(user);
    console.log(total);
console.log({
    user_email: user?.email,
    total_amount: total
});
    try {
const response = await axios.post(
    "https://awara-ware.onrender.com",
    {
        user_email: user.email,
        total_amount: total
    }
);


        alert(response.data.message);
        navigate("/order-success");

    } catch (error) {
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data);

        alert("Failed to place order");
    }
};

    return (
        <div
            style={{
                padding: "40px",
                color: "white",
                maxWidth: "800px",
                margin: "auto",
            }}
        >
            <h1 style={{ textAlign: "center" }}>Checkout</h1>

            <form
                onSubmit={handleOrder}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    marginTop: "30px",
                }}
            >
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    required
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                />

                <input
                    type="text"
                    placeholder="Shipping Address"
                    required
                />

                <input
                    type="text"
                    placeholder="City"
                    required
                />

                <input
                    type="text"
                    placeholder="Pincode"
                    required
                />

                <h2>Order Summary</h2>

                {cartItems.map((item, index) => (
                    <div key={index}>
                        {item.name} × {item.quantity} = ₹
                        {item.price * item.quantity}
                    </div>
                ))}

                <h2>Total: ₹{total}</h2>

                <button
                    type="submit"
                    style={{
                        background: "#ff3c38",
                        color: "white",
                        padding: "15px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Place Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;