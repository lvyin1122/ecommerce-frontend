import React from "react";
import ProductItem from "../../components/ProductItem";
import classes from "./Home.module.css";
import data from "../../productsData";

function Home() {
  const productsList = data.map((data) => (
    <ProductItem
      key={data.id}
      id={data.id}
      name={data.name}
      author={data.author}
      price={data.price}
      image={data.image}
    />
  ));

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
      </div>
    </div>
  );
}

export default Home;
