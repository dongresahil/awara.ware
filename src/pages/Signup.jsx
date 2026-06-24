import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/register",
                {
                    name,
                    email,
                    password,
                }
            );

            alert(response.data.message);
            navigate("/login");

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (
        <div
            style={{
                textAlign: "center",
                padding: "100px",
                color: "white",
            }}
        >
            <h1>Create Account</h1>

            <form
                onSubmit={handleSignup}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    width: "300px",
                    margin: "30px auto",
                }}
            >
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        background: "#ff3c38",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;