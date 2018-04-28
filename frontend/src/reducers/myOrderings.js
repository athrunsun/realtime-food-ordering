import { RECORD_MY_ORDERING } from 'actions';

const myOrderings = (
    myOrderings = {
        orderingRecords: [],
    },
    action,
) => {
    switch (action.type) {
        case RECORD_MY_ORDERING:
            return Object.assign({}, myOrderings, {
                orderingRecords: [...myOrderings.orderingRecords, action.orderingRecord],
            });
        default:
            return myOrderings;
    }
};

export { myOrderings };
