// import uuid from "uuid/v4"
import { ADD, REMOVE } from './actionTypes';

const INITIAL_STATE = {
    cart: []
}

function reducer(state = INITIAL_STATE, action) {
    let newCart;

    if (action.type === ADD) {
        console.log('we got to reducer add')
        console.log('state now is?', state)
        newCart = [...state.cart, action.payload]
        return {
            cart: newCart
        }
    }

    if (action.type === REMOVE) {
        newCart = state.cart.filter(i => i.id !== action.payload)
        return {
            cart: newCart
        }
    }

    return state
}

export default reducer;