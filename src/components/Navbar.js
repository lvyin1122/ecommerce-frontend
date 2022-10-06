import React from "react";
import styles from "./Navbar.module.css";

function Navbar(props) {
    return (
      <div className={styles.navbar}>
        <div className={styles.brand}>{props.brand}</div>
        <div className={styles.cart}>Cart</div>
      </div>
    );
  }

export default Navbar;
