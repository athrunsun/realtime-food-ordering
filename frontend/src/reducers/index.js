import { combineReducers } from 'redux';

import { cart } from 'reducers/cart';
import { foodList } from 'reducers/foodList';

const rootReducer = combineReducers({
    cart,
    foodList,
});

export default rootReducer;
