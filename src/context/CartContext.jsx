import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
const [cartItems, setCartItems] = useState([]);

  // Add item
const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
};

  // Remove item
const removeFromCart = (index) => {
    setCartItems(
    cartItems.filter((_, i) => i !== index)
    );
};

  // Increase quantity
const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
};

  // Decrease quantity
const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
    setCartItems(updatedCart);
    }
};

return (
    <CartContext.Provider
    value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    }}
    >
    {children}
    </CartContext.Provider>
);
}

export default CartProvider;