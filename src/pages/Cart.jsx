import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
const {
cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} = useContext(CartContext);

const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
);

return (
    <div style={{ padding: "30px", color: "white" }}>
    <h1 style={{ textAlign: "center" }}>Your Cart</h1>

    {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items added yet.</p>
    ) : (
        <>
        {cartItems.map((item, index) => (
            <div
            key={index}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#111",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
            }}
            >
            <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                }}
            >
                <img
                src={item.image}
                alt={item.name}
                width="100"
                style={{ borderRadius: "10px" }}
                />

                <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div style={{ marginTop: "10px" }}>
                    <button
                    onClick={() => decreaseQuantity(index)}
                    style={{
                        padding: "5px 10px",
                        marginRight: "10px",
                    }}
                    >
                    -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                    onClick={() => increaseQuantity(index)}
                    style={{
                        padding: "5px 10px",
                        marginLeft: "10px",
                    }}
                    >
                    +
                    </button>
                </div>
                </div>
            </div>

            <button
                onClick={() => removeFromCart(index)}
                style={{
                background: "#ff3c38",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                }}
            >
                Remove
            </button>
            </div>
        ))}

        <h2 style={{ textAlign: "center", marginTop: "30px" }}>
            Total: ₹{total}
        </h2>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/checkout">
            <button
                style={{
                background: "#ff3c38",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                }}
            >
                Proceed to Checkout
            </button>
            </Link>
        </div>
        </>
    )}
    </div>
);
}

export default Cart;