import React from "react";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div className={classes.productItem}>
      <img src={props.image} alt="" />
      <div className={classes.productInfo}>
        <h1>{props.name}</h1>
        <div className={classes.infoBottom}>
          <div className={classes.infoLeft}>
            <span className={classes.author}>{props.author}</span>
            <span className={classes.price}>{props.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
