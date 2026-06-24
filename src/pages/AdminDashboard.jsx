import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState({
        total_orders: 0,
        total_sales: 0,
        orders: []
    });

    useEffect(() => {

        axios
            .get("http://127.0.0.1:5000/admin/orders")
            .then((res) => {
                setDashboard(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div
            style={{
                padding: "40px",
                color: "white"
            }}
        >

            <h1>Admin Dashboard</h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >

                <div
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "200px"
                    }}
                >
                    <h2>Total Orders</h2>
                    <h1>{dashboard.total_orders}</h1>
                </div>

                <div
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "200px"
                    }}
                >
                    <h2>Total Sales</h2>
                    <h1>₹{dashboard.total_sales}</h1>
                </div>

            </div>

            <h2 style={{ marginTop: "40px" }}>
                All Orders
            </h2>

            {dashboard.orders.map((order) => (

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

                    <p>
                        Total: ₹{order.total_amount}
                    </p>

                    <p>Date: {order.order_date}</p>

                </div>

            ))}

        </div>
    );
}

export default AdminDashboard;