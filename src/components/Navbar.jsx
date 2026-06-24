import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { cartItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 40px",
                background: "#111",
            }}
        >
            <h2 style={{ color: "white" }}>AWARA.WARE</h2>

            <div
                className="nav-links"
                style={{
                    display: "flex",
                    gap: "25px",
                    alignItems: "center",
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
<Link to="/my-orders">My Orders</Link>
<Link to="/admin">Admin</Link>
                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <>
                        <span style={{ color: "white" }}>
                            Welcome, {user?.email}
                        </span>

                        <button
                            onClick={logout}
                            style={{
                                background: "#ff3c38",
                                color: "white",
                                border: "none",
                                padding: "8px 15px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}

                <Link to="/cart">
                    Cart ({cartItems.length})
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;