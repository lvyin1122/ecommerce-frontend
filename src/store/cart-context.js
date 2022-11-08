import { createContext, useState } from "react";

// Create the cart context
const CartContext = createContext();

// Define initial state for cart items
const initialCartState = [];

// Define CartProvider component
export function CartProvider(props) {
  // Apply useState hook to update the state of the cart
  const [cartState, setCartState] = useState(initialCartState);

  // Define a addCartItem function that add a product to the cart list
  const addCartItem = (item) => {
    setCartState((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id).concat(item)
    );
  };

  // Define a removeCartItem function that remove a product from the cart list
  const removeCartItem = (id) => {
    setCartState((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  // Define a clearCart function that clear the cart list
  const clearCart = () => {
    setCartState([]);
  };

  const cartContext = {
    cartState: cartState,
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
