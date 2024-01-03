import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Endpoints from "../api/Endpoints";
import logo from "../Components/giphy.gif";
const ProductList = () => {
    const [data, setData] = useState(true);
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        
            axios
                .get(Endpoints.PRODUCT_URL)
                .then((response) => setProducts(response.data))
                .catch((error) => console.log(error));
        
        setData(false);
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