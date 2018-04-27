import { ADD_TO_CART } from 'actions';
import { REMOVE_FROM_CART } from 'actions';
import { CLEAR_CART } from 'actions';

const cart = (
    cart = {
        foodList: [],
    },
    action,
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, cart, {
                foodList: [...cart.foodList, action.food],
            });
        case REMOVE_FROM_CART:
            return Object.assign({}, cart, {
                foodList: cart.foodList.filter((item, index) => item.food_id !== action.food.food_id),
            });
        case CLEAR_CART:
            return Object.assign({}, cart, {
                foodList: [],
            });
        default:
            return cart;
    }
};

export { cart };
