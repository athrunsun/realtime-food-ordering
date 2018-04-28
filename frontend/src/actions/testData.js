import { doFetch } from 'utils/fetchUtil';

import { fetchFoodList } from 'actions/foodList';

const insertTestData = () => {
    return dispatch => {
        return doFetch('/food/insertTestData')
            .then(response => response.json())
            .then(() => dispatch(fetchFoodList()));
    };
};

export { insertTestData };
