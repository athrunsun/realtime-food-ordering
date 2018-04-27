import * as log from 'loglevel';
import { doFetch } from 'utils/fetchUtil';

const REQUEST_FOOD_LIST = 'REQUEST_FOOD_LIST';
const RECEIVE_FOOD_LIST = 'RECEIVE_FOOD_LIST';

const requestFoodList = () => {
    return {
        type: REQUEST_FOOD_LIST,
    };
};

const receiveFoodList = data => {
    return {
        type: RECEIVE_FOOD_LIST,
        foodList: data,
    };
};

const fetchFoodList = () => {
    return dispatch => {
        log.debug('Start requesting food list...');
        dispatch(requestFoodList());

        return doFetch('/food/all')
            .then(response => response.json())
            .then(json => dispatch(receiveFoodList(json)));
    };
};

export {
    REQUEST_FOOD_LIST,
    RECEIVE_FOOD_LIST,
    fetchFoodList,
};
