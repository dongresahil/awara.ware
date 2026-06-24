import { useState } from "react";
import ProductCard from "./ProductCard";
import tee1 from "../assets/products/tee1.jpeg";
import tee2 from "../assets/products/tee2.jpeg";

function Recommendation() {
    const [interest, setInterest] = useState("");
    const [products, setProducts] = useState([]);

    const getRecommendation = () => {
        if (interest.toLowerCase() === "anime") {
            setProducts([
                "Tokyo Drift Tee",
                "Samurai Tee",
                "Demon Slayer Tee",
            ]);
        } else if (interest.toLowerCase() === "streetwear") {
            setProducts([
                "AWARA Oversized Tee",
                "Street Soul Tee",
            ]);
        } else if (interest.toLowerCase() === "minimal") {
            setProducts([
                "Premium Collection Tee",
            ]);
        } else {
            setProducts([
                "AWARA Oversized Tee",
            ]);
        }
    };

    return (
        <div
            style={{
                textAlign: "center",
                padding: "50px",
                color: "white",
            }}
        >
            <h2>AI Product Recommendation</h2>

            <input
                type="text"
                placeholder="Enter Interest (Anime, Streetwear, Minimal)"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                }}
            />

            <br />
            <br />

            <button onClick={getRecommendation}>
                Get Recommendation
            </button>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "40px",
                }}
            >
                {products.map((item, index) => (
                    <ProductCard
                        key={index}
                        name={item}
                        price={499}
                        image={index % 2 === 0 ? tee1 : tee2}
                        description="AI Recommended Product"
                    />
                ))}
            </div>
        </div>
    );
}

export default Recommendation;