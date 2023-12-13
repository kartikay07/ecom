import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from '../Components/Navbar';
import Endpoints from '../api/Endpoints';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cart-actions'
import { Provider } from 'react-redux';

const ProductDetailPage = () => {
    let {id} = useParams()
    const [ product, setProduct ] = useState([])

    const dispatch = useDispatch()

    const fetchData = () => {
        axios.get(Endpoints.PRODUCT_URL+ '/'+ id)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [id])

    const addToCartHandler = () => {
        dispatch(addToCart(product))
        
    }

    return(
        <>
            <Navbar />
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.images} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>{ product.title }</h3>
                            <p>{ product.description }</p>
                            <h2><span>&#8377;</span>{ product.price }</h2>
                            
                            <br />
                            <button onClick={ addToCartHandler } className="btn btn-primary">Add To Cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetailPage;