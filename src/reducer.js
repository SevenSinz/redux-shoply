// import uuid from "uuid/v4"
import { ADD, REMOVE } from './actionTypes';
import Item from './Item';

const INITIAL_STATE = {
    cart: []
}

function reducer(state = INITIAL_STATE, action) {
    let newCart;

    if (action.type === ADD) {
        
        let item = action.payload;
        
        // let newCart = state.cart.map( c => c.id === item.id ? c.total++ : [...state.cart, {...item, total:1}] )
        
        // if (state.cart.length!==0){

            for (let itemObj of state.cart){
                console.log("inside for")
                if (itemObj.id === item.id) {
                    itemObj.total++;
                    return {cart: state.cart}
                } else {
                    let newCart=[...state.cart, {...item, total:1}]
                    console.log('state after adding new: ', newCart)
                    return {cart: newCart}
                }  
            }
        // }
        // else {
        //     return  {cart: [{...item, total:1}]}
        // }

        console.log('we got to reducer add')
        // if (itemExists) {                    
        //     state.cart.total ++; 
        //     newCart = {...state.cart}
        //     return newCart;}

        // if (!itemExists) {
        //     item['total'] = 1;
        //     newCart = 
        //     return newCart;
        // }

        // return {
        //     cart: newCart
        // }
    }

    if (action.type === REMOVE) {
        console.log('we got to reducer remove')
        console.log('state after remove: ', state)
        newCart = state.cart.filter(i => i.id !== action.payload)
        return {
            cart: newCart
        }
    }

    return state
}

export default reducer;

