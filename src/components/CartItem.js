import React from "react";
import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function CartItem(props) {
  const { removeCartItem } = useContext(CartContext);
  const removeCartItemHandler = () => {
    removeCartItem(props.id);
  };

  return (
    <li className={styles.cartItem}>
      <img src={props.imgSrc} alt="" />
      <div className={styles.center}>
        <h3>{props.name}</h3>
        <p>By {props.author}</p>
      </div>
      <div className={styles.right}>
        <span>${props.price}</span>
        <span className={styles.remove} onClick={removeCartItemHandler}>
          Remove
        </span>
      </div>
    </li>
  );
}

export default CartItem;
