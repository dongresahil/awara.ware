import { Link } from "react-router-dom";

function OrderSuccess() {
return (
<div
    style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
    }}
    >
    <h1 style={{ color: "#ff3c38", fontSize: "50px" }}>
        Order Placed Successfully 🎉
    </h1>

    <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Thank you for shopping with AWARA.WARE
    </p>

    <Link to="/">
        <button
        style={{
            marginTop: "30px",
            background: "#ff3c38",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
        }}
        >
        Continue Shopping
        </button>
    </Link>
    </div>
);
}

export default OrderSuccess;