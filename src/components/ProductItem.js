import React from "react";
import styles from "./ProductItem.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

function ProductItem(props) {
  const { addCartItem } = useContext(CartContext);
  const addCartItemHandler = () => {
    addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      author: props.author,
    });
  };

  return (
    <div className={styles.productItem}>
      <img src={props.image} alt="" />
      <div className={styles.productInfo}>
        <h1>{props.name}</h1>
        <div className={styles.infoBottom}>
          <div className={styles.infoLeft}>
            <span className={styles.author}>{props.author}</span>
            <span className={styles.price}>{props.price}</span>
          </div>
          <button onClick={addCartItemHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
