import { ActionTypes } from "../constants/action-types"
import { Provider } from 'react-redux';

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const selected=(product)=>{
    return{
        type:ActionTypes.CLEAR_CART,
        payload:product
    }
}
export const removeItem=(product)=>{
    return{
        type:ActionTypes.REMOVE_ITEM,
        payload:product
    }
}
export const increaseQuantity = (product) => {
    return {
      type: ActionTypes.INCREASE_QUANTITY,
      payload:product
    };
  };
  
  export const decreaseQuantity = (product) => {
    return {
      type: ActionTypes.DECREASE_QUANTITY,
      payload: product
    };
  };
  export const addToFavourate = (product) => {
    return {
      type: ActionTypes.ADD_TO_FAVORITES,
      payload: product
    };
  };
  export const removefavourite=(product)=>{
    return{
      type:ActionTypes.REMOVE_TO_FAVORITE,
      payload:product
    };
  }