import { combineReducers } from 'redux';

import { cart } from 'reducers/cart';
import { foodList } from 'reducers/foodList';
import { storeSales } from 'reducers/storeSales';
import { myOrderings } from 'reducers/myOrderings';
import { onlineUsers } from 'reducers/onlineUsers';

const rootReducer = combineReducers({
    cart,
    foodList,
    storeSales,
    myOrderings,
    onlineUsers,
});

export default rootReducer;
