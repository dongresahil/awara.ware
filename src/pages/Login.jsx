import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();

    try {
    const response = await 
    axios.post("https://awara-ware.onrender.com/login"),
        {
            email,
            password,
        }
    );

    login(email);

    
    navigate("/");

} catch (error) {
    alert("Invalid email or password");
}
}
    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "80px auto",
                padding: "30px",
                background: "#111",
                borderRadius: "10px",
                color: "white",
            }}
        >
            <h1 style={{ textAlign: "center" }}>Login</h1>

            <form
                onSubmit={handleLogin}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    style={{
                        background: "#ff3c38",
                        color: "white",
                        border: "none",
                        padding: "12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;