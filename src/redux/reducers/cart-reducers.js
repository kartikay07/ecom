import { ActionTypes } from '../constants/action-types';
import { combineReducers } from 'redux';


const initialState = {
    Carts: [],
    cartItems: 0,
    
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.GET_NUMBER_CART:
            return {
                ...state
            }
            case ActionTypes.CLEAR_CART:
                return {
                ...state,
                cartItems:0
                
                
                }
        case ActionTypes.REMOVE_ITEM:
            
        return {
            ...state,
            Carts: state.Carts.filter(product => product.id !== payload.id),
            cartItems: state.cartItems - 1,
            
            cartItems: state.cartItems > 0 ? state.cartItems - 1 : 0,
            
          };
          case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        Carts: state.Carts.map((product) =>
          product.id === payload.id ? { ...product, quantity: product.quantity + 1 } : product
        ),
        cartItems: state.cartItems + 1,
        
      };
      case ActionTypes.DECREASE_QUANTITY:
        return {
          ...state,
          Carts: state.Carts.map((product) =>
            product.id === payload.id && product.quantity > 0
              ? { ...product, quantity: product.quantity - 1 }
              : product
              
          ),
          cartItems: state.cartItems > 0 ? state.cartItems - 1 : 0,
          
        };
        case ActionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                Carts: [...state.Carts, payload.id],
            };
        case ActionTypes.REMOVE_TO_FAVORITE :
            return{
                ...state,
            
                Carts: state.Carts.filter((itemId) => itemId !== payload.id),
            }     
        case ActionTypes.ADD_TO_CART:
            /*if cart empty directly add the item with quantity 1
            if cart not empty check item if not same add with quantity 1
            if cart not empty check item if same increase qty by 1*/
            if(state.cartItems === 0){
                let item = {
                    ...payload,
                    quantity: 1
                }
                state.Carts.push(item)
                
            }else{
                let check  = false;
                state.Carts.map((item, index) => {
                    if(item.id === payload.id){
                        state.Carts[index].quantity++
                        check = true;
                    }
                })
                if(!check){
                    let _item = {
                        ...payload,
                        quantity: 1
                    };
                    state.Carts.push(_item)
                }
            }
            return {
                ...state,
                cartItems: state.cartItems + 1
    }
        default:
            return state;

    }
}