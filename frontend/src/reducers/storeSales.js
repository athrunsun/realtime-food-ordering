import { RECORD_SALE } from 'actions';

const storeSales = (
    storeSales = {
        salesRecords: [],
    },
    action,
) => {
    switch (action.type) {
        case RECORD_SALE:
            return Object.assign({}, storeSales, {
                salesRecords: [...storeSales.salesRecords, action.saleRecord],
            });
        default:
            return storeSales;
    }
};

export { storeSales };
