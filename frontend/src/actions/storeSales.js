const RECORD_SALE = 'RECORD_SALE';

const recordSale = (saleRecord) => {
    return {
        type: RECORD_SALE,
        saleRecord,
    };
};

export {
    RECORD_SALE,
    recordSale,
};
