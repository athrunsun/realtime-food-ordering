import { REQUEST_FOOD_LIST, RECEIVE_FOOD_LIST } from 'actions';

const foodList = (
    foodList = {
        isFetching: false,
        list: [],
    },
    action,
) => {
    switch (action.type) {
        case REQUEST_FOOD_LIST:
            return Object.assign({}, foodList, {
                isFetching: true,
            });
        case RECEIVE_FOOD_LIST:
            return Object.assign({}, foodList, {
                isFetching: false,
                list: action.foodList,
            });
        default:
            return foodList;
    }
};

export { foodList };
