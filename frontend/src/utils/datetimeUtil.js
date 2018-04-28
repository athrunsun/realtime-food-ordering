const convertTimestampInMilliSecondsToDate = timestampInMilliSeconds => {
    const date = new Date(timestampInMilliSeconds);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export {
    convertTimestampInMilliSecondsToDate,
};
