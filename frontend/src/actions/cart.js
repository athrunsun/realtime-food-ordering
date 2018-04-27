import * as log from 'loglevel';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

const addToCart = (food) => {
    return {
        type: ADD_TO_CART,
        food,
    };
};

const removeFromCart = food => {
    return {
        type: REMOVE_FROM_CART,
        food,
    };
};

const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

export {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    addToCart,
    removeFromCart,
    clearCart,
};
