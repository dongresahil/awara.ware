import ProductCard from "../components/ProductCard";

import tee1 from "../assets/products/tee1.jpeg";
import tee2 from "../assets/products/tee2.jpeg";
import tee3 from "../assets/products/tee3.jpeg";
import tee4 from "../assets/products/tee4.jpeg";

function Shop() {
    const products = [
    {
        id: 1,
        name: "AWARA Oversized Tee",
        price: 499,
        image: tee1,
        description: "240 GSM Premium Cotton",
    },
    {
            id: 2,
            name: "Tokyo Drift Tee",
            price: 499,
            image: tee2,
            description: "Anime Streetwear Collection",
    },
    {
        id: 3,
        name: "Demons Slayer Tee",
        price: 599,
        image: tee3,
        description: "Limited Edition Drop",
    },
    {
        id: 4,
        name: "Street Soul Tee",
        price: 499,
        image: tee4,
        description: "Oversized Fit",
    },
    ];

    return (
    <div
        style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "30px",
        }}
    >
        {products.map((product) => (
        <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
        />
        ))}
    </div>
    );
}

export default Shop;