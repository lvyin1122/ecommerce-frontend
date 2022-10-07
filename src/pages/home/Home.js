import React, { useState } from "react";
import ProductItem from "../../components/ProductItem";
import CarouselFade from "../../components/CarouselFade";
import PaginationBasic from "../../components/PaginationBasic";
import classes from "./Home.module.css";
import data from "../../productsData";

function Home() {
  // Initialize the state indicating the active page
  const [page, setPage] = useState(1);
  // Each page contains 6 items
  const limit = 6;
  // Compute the number of pages from the number of items
  const pageCount = Math.ceil(data.length / limit);

  // Compute the products should be shown in current page
  const start = 0 + (page - 1) * limit;
  const currentData = data.slice(start, start + limit);

  const productsList = currentData.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      imgSrc={item.imgSrc}
    />
  ));

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <CarouselFade />
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
        <PaginationBasic pageCount={pageCount} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Home;
