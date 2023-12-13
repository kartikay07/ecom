import { ActionTypes } from '../constants/action-types';

const initialState = {
    Carts: [],
    cartItems: 0
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.GET_NUMBER_CART:
            return {
                ...state
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