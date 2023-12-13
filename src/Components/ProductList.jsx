import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Endpoints from "../api/Endpoints";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    const fetchData = () => {
      axios
        .get(Endpoints.PRODUCT_URL)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="container">
        <h2 className="text-center">All Products</h2>
        <div class="row">
          {products.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </div>
      </div>
    );
  };
  export default ProductList;