import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function MyOrders() {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if (user) {
            axios
                .get(`https://awara-ware.onrender.com/${user.email}`)
                .then((res) => {
                    setOrders(res.data);
                })
                
                .catch((err) => {
                    console.log(err);
                });
    console.log(orders);   }

    }, [user]);

    return (
        <div
            style={{
                padding: "40px",
                color: "white"
            }}
        >
            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <p>No Orders Found</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order.id}
                        style={{
                            background: "#111",
                            padding: "20px",
                            marginTop: "20px",
                            borderRadius: "10px"
                        }}
                    >
                        <h3>Order #{order.id}</h3>
                        <p>Email: {order.user_email}</p>
                        <p>Total: ₹{order.total_amount}</p>
                        <p>Date: {order.order_date}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyOrders;