import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addToFavourate } from '../redux/actions/cart-actions';
import Navbar from './Navbar'
import { removefavourite } from '../redux/actions/cart-actions';
export default function Favourite() {
    const product=useSelector((state)=>state.Carts);
    const dispatch = useDispatch()
    
  const removecart = (product) => {
    
    dispatch(removefavourite(product))
    
}
  return (
    <div>
       <Navbar/>
    {product.map(product => (
        <div key={product.id} >
            <table>
        <tr>
            <th>Product image</th>
            <th> Price </th>
        </tr>
        <tr>
           <th> <img src={product.images}className='image-fluid'alt=""width={250} height={250} /></th>
           <td> {product.price}</td>
           </tr>
           </table>
           
          </div>  
         
            ))}
            
    </div>
  )
}

