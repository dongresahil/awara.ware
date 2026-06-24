import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, image, description }) { const { addToCart } = useContext(CartContext);

return (
    <div style={{
        width: "280px",
        background: "#111",
        padding: "15px",
        borderRadius: "12px",
        textAlign: "center",
        transition: "0.3s",
        boxShadow: "0 0 15px rgba(255,255,255,0.05)", }}
        
    >
      {/* Sale Badge */}
<div
        style={{
background: "#ff3c38",
color: "white",
padding: "5px 10px",
        borderRadius: "5px", display: "inline-block",      marginBottom: "10px",
    fontWeight: "bold",
        }}
>
        SALE
</div>

      {/* Product Image */}
<img
        src={image}
        alt={name}
        width="250"
        style={{
orderRadius: "10px",
    marginBottom: "10px",  }}
/>

      {/* Product Name */}
<h3
        style={{
    color: "white",
        marginBottom: "8px",
        }}
    >
        {name}
    </h3>

      {/* Description */}
<p
        style={{
    color: "#aaa",
        fontSize: "14px",
        }}
    >
        {description}
    </p>

      {/* Price */}
    <p
        style={{
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        }}
    >
        ₹{price}
    </p>

      {/* Buttons */}
    <div
        style={{
    display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
        }}
    >
        <button
        onClick={() =>
            addToCart({
            name,
            price,
            image,
            })
        }
        style={{
            background: "#ff3c38",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
        Add To Cart
        </button>

        <button
        style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
        Buy Now
        </button>
    </div>
    </div>
);
}

export default ProductCard;