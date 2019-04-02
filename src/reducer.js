// import uuid from "uuid/v4"
import { ADD, REMOVE } from './actionTypes';
import Item from './Item';

const INITIAL_STATE = {
    cart: [],
    totalItems: 0
}

function reducer(state = INITIAL_STATE, action) {
    let newCart;

    if (action.type === ADD) {

        let item = action.payload;
        let foundIdex = state.cart.findIndex(
            c => c.id === item.id
        );
        
        if (foundIdex === -1) {
            let newCart = [...state.cart, { ...item, total: 1 }]
            console.log('state after adding new: ', state)
            return { cart: newCart, totalItems: state.totalItems + 1 }
        } 
        else {
            state.cart[foundIdex].total += 1;
            console.log('add more to existing item', state)
            return {
                cart: state.cart,
                totalItems: state.totalItems + 1
            }
        }
    }

    if (action.type === REMOVE) {
        console.log('we got to reducer remove')
        console.log('state after remove: ', state)

        let id = action.payload;
        let foundIdex = state.cart.findIndex(
            c => c.id === id
        );

        if (state.cart[foundIdex].total === 1)  {
            newCart = state.cart.filter(i => i !== state.cart[foundIdex])
                    return {
                        cart: newCart,
                        totalItems: state.totalItems - 1
                    }
        } else {
            newCart = state.cart.map( i =>  
                        i !== state.cart[foundIdex] ? i : {...i, total: i.total-1} 
                    ) 
            return {
                cart: newCart,
                totalItems: state.totalItems - 1
            }
        }
    }

    return state
}

export default reducer;

