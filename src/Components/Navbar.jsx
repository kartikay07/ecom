import React from 'react'
import {Link} from 'react-router-dom'
import { cartReducer } from '../redux/reducers/cart-reducers';
import { addToCart } from '../redux/actions/cart-actions';
import ProductDetailPage from '../Pages/ProductDetailPage';
import { useState,useEffect } from 'react';
import Endpoints from '../api/Endpoints';
import { useParams } from 'react-router-dom';
import { ActionTypes } from '../redux/constants/action-types';
import store from '../redux/store';
import count from '../Pages/ProductDetailPage'
import { useSelector } from 'react-redux';
import { colors } from '@material-ui/core';
import logo from "./giphy (1).gif";
import Cart from './Cart';
import {  removeItem, selected } from '../redux/actions/cart-actions'
import { useDispatch } from 'react-redux';
import { number } from 'yup';



export default function Navbar() {
  const product=useSelector((state)=>state.cartItems);
  const dispatch = useDispatch()

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark red">
      <Link class="navbar-brand" to="/">
      <img src={logo} alt="loading..." width={80} height={80} />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"style={{color:'white'}} to="/products">
              Products
            </Link>
          </li>
          <li class="nav-item" >
            <Link class="nav-link" style={{color:'white'}} to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"style={{color:'white'}} to="/contact">
              Contact
            </Link>
          </li>
          <li class="nav-item"><Link className='nav-link' to='/favourite' style={{color:"white"}}>Favourite</Link></li>
          
        </ul>
        

        
        <Link to="/Cart">
          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style={{color:"yellow"}}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Link>
        
          
           <i> <Link class="nav-link"style={{color:"yellow"}}   to="/Cart" >Cart</Link></i>
           <span class='badge badge-warning' id='lblCartCount' ></span>
           <Link to='/login' style={{color:"white"}}>Login</Link>
        
      </div>
    </nav>
   
  );
};
