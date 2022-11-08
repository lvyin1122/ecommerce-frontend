import React from "react";
import CartItem from "../../components/CartItem.js";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context.js";
import AuthContext from "../../store/auth-context.js";
import { useContext } from "react";

function Cart() {
  const { cartState, clearCart } = useContext(CartContext);
  const { isLoggedIn, userId } = useContext(AuthContext);

  const checkoutHandler = async () => {
    // Send cart data to server
    if (isLoggedIn) {

      const response = await fetch(
        "http://localhost:8800/api/carts/checkout/" + userId,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + localStorage.getItem("authState").token,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      clearCart();
    } else {
      alert("Please log in to checkout");
    }
  };

  const cartList = cartState.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      image={item.image}
    />
  ));

  return (
    <div className={classes.cart}>
      <h1>My Shopping Cart</h1>
      {cartList.length > 0 ? (
        <div>
          <ul className={classes.cartList}>
            {cartList}
            <button onClick={checkoutHandler}>Checkout</button>
          </ul>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
