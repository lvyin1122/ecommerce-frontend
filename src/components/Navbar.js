import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

function Navbar(props) {
  const { isLoggedIn, logout, username } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
    alert("You have been logged out");
  };

  const loginLink = (
    <Link to="/login" className={styles.login}>
      Log in
    </Link>
  );

  const logoutLink = <Link onClick={logoutHandler}>Log out</Link>;

  const userLink = <Link to="/cart">Hello, {username}!</Link>;

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        {props.brand}
      </Link>
      <div className={styles.navLinks}>
        {isLoggedIn && userLink}
        {isLoggedIn ? logoutLink : loginLink}
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
