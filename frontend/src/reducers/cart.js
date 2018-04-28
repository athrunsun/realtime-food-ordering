import { ADD_TO_CART } from 'actions';
import { REMOVE_FROM_CART } from 'actions';
import { CLEAR_CART } from 'actions';
import { convertToFloat } from 'utils/numberUtils';

const cart = (
    cart = {
        totalPrice: 0,
        foodList: [],
    },
    action,
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, cart, {
                totalPrice: cart.totalPrice + convertToFloat(action.food.price),
                foodList: [...cart.foodList, action.food],
            });
        case REMOVE_FROM_CART:
            return Object.assign({}, cart, {
                totalPrice: cart.totalPrice - convertToFloat(action.food.price),
                foodList: cart.foodList.filter((item, index) => item.food_id !== action.food.food_id),
            });
        case CLEAR_CART:
            return Object.assign({}, cart, {
                totalPrice: 0,
                foodList: [],
            });
        default:
            return cart;
    }
};

export { cart };
