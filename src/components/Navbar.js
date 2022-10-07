import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        {props.brand}
      </Link>
      <Link to="/cart" className={styles.cart}>
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
