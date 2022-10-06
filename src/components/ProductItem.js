import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div className={styles.productItem}>
      <img src={props.imgSrc} alt="" />
      <div className={styles.productInfo}>
        <h1>{props.name}</h1>
        <div className={styles.infoBottom}>
          <div className={styles.infoLeft}>
            <span className={styles.author}>{props.author}</span>
            <span className={styles.price}>{props.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
