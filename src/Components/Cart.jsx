import React from 'react'
import { addToCart, removeItem, selected ,increaseQuantity,decreaseQuantity} from '../redux/actions/cart-actions'
import { useDispatch, useSelector } from 'react-redux'
import Product from "./Product";
import store from '../redux/store';
import { cartReducer } from '../redux/reducers/cart-reducers';
import Navbar from './Navbar';
import { useState } from 'react';



export default function Cart() {
  const [number, setNumber] = useState([1]);

  
  const product=useSelector((state)=>state.Carts);
  
  const dispatch = useDispatch()
  const removeItemcart = (product) => {
    
    dispatch(removeItem(product))
    
}
const increaseItemQuantity = (product) => {
  dispatch(increaseQuantity(product));
  
};

const decreaseItemQuantity = (product) => {
  dispatch(decreaseQuantity(product));
  
};
 
  return (
    <div>
    <Navbar/>
    {product.map(product => (
        <div key={product.id} >
          
          <table>
        <tr>
            <th>Product image</th>
            <th> Product Discription</th>
            <th>Quantity </th>
            <th> Price </th>
        </tr>
        <tr>
          
        <th><img src={product.images}className= "img-fluid" width={250} height={250}/></th>
            <td>{product.description}</td>
            <td><input type="number" min={1}onChange={e => setNumber(e.target.value)} /></td>
            
            
            <td>₹{product.price}</td>
            </tr>
            
        </table>
        <button type='button'  onClick={() => removeItemcart(product)}>Remove</button>
       
        </div>
       
     
       
      ))}
      
                     
    </div>
  )
}

