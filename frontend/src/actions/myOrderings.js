const RECORD_MY_ORDERING = 'RECORD_MY_ORDERING';

const recordMyOrdering = orderingRecord => {
    return {
        type: RECORD_MY_ORDERING,
        orderingRecord,
    };
};

export {
    RECORD_MY_ORDERING,
    recordMyOrdering,
};
