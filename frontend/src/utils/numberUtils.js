const convertToFloat = number => {
    const numberAsFloat = +parseFloat(number).toFixed(2);
    return numberAsFloat;
};

export {
    convertToFloat,
};
