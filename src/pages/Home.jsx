import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import tee1 from "../assets/products/tee1.jpeg";
import tee2 from "../assets/products/tee2.jpeg";
import Recommendations from "../components/Recommendations";

function Home() {
return (
    <>
    <Navbar />

      {/* Hero Section */}
    <div
        style={{
    textAlign: "center",
    padding: "140px 20px"
        }}
    >
        <h3>NEW DROP 2026</h3>

        <h1
        style={{
            fontSize: "70px",
            margin: "20px 0",
        }}
        >
        AWARA.WARE
        </h1>

        <p
        style={{
            fontSize: "24px",
        }}
        >
        Dare to Dress Different.
        </p>

        <button
        style={{
            padding: "10px 10px",
            marginTop: "20px",
            fontSize: "20px",
            cursor: "pointer",
        }}
        >
    <Link to="/shop">
<button>SHOP NOW</button>
</Link>
        </button>
    
    </div>

      {/* Featured Products */}
    <div style={{ padding: "50px", textAlign: "center" }}>
        <h2 style={{ color: "white", marginBottom: "30px" }}>
        Featured Collection
        </h2>

        <div
        style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
        }}
        >
    <ProductCard
            name="AWARA Oversized Tee"
            price={499}
            image={tee1}
            description="Premium streetwear oversized t-shirt"
        />

        <ProductCard
            name="Tokyo Drift Tee"
            price={499}
            image={tee2}
            description="Anime-inspired streetwear tee"
        />

        <ProductCard
            name="Premium Collection"
            price={1299}
            image={tee1}
            description="Limited edition streetwear"
        />
        </div>
    </div>
<Recommendations />
    <Footer />
    </>
);
}

export default Home;