import { ADD, REMOVE } from './actionTypes';

export function add(item) {
    console.log('we got here')
    return {
        type: ADD,
        payload: item
    };
}

export function remove(id) {
    return {
        type: REMOVE,
        payload: id
    }
}