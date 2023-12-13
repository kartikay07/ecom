import { ActionTypes } from "../constants/action-types"
import { Provider } from 'react-redux';

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}