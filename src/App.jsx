import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderSuccess from "./pages/OrderSuccess";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";
import MyOrders from "./pages/MyOrders";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>
<Route
  path="/order-success"
  element={<OrderSuccess />}
/>
        <Route path="/" element={<Home />} />
        <Route
    path="/admin"
    element={<AdminDashboard />}
/>
<Route path="/my-orders" element={<MyOrders />} />
        <Route path="/shop" element={<Shop />} />
      <Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    
  <Route path="/cart" element={<Cart />} />


      </Routes>
    </BrowserRouter>
  );
}


export default App;