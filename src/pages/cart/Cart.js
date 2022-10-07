import React from "react";
import CartItem from "../../components/CartItem.js";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context.js";
import { useContext } from "react";

function Cart() {
  const { cartState } = useContext(CartContext);

  const cartList = cartState.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      imgSrc={item.imgSrc}
    />
  ));

  return (
    <div className={styles.cart}>
      <h1>My Shopping Cart</h1>
      <ul className={styles.cartList}>{cartList}</ul>
    </div>
  );
}

export default Cart;
