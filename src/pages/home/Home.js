import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import CarouselFade from "../../components/CarouselFade";
import PaginationBasic from "../../components/PaginationBasic";
import classes from "./Home.module.css";

function Home() {
  // Initialize the state indicating the active page
  const [page, setPage] = useState(1);
  // Initialize the products state
  const [products, setProducts] = useState([]);

  // Each page contains 6 items
  const limit = 6;

  // useEffect hook is used to fetch the data from the API
  useEffect(() => {
    // Declare a async function to fetch the data
    const fetchProducts = async () => {
      try {
        // Get the response from the server
        const response = await axios.get("http://localhost:8800/products");
        // Get data from the response
        const data = await response.data;
        // Update the products state
        if (data) {
          setProducts(data);
        }
        // Catch and log any errors
      } catch (error) {
        console.log(error);
        alert("Error fetching products. Maybe your server is not running?");
      }
    };
    // Call the async function
    fetchProducts();
  }, []);

  // Compute the number of pages from the number of items
  const pageCount = Math.ceil(products.length / limit);

  // Compute the products should be shown in current page
  const start = 0 + (page - 1) * limit;
  const currentData = products.slice(start, start + limit);

  const productsList = currentData.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      image={item.image}
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
