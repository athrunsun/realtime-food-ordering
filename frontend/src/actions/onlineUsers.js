const UPDATE_ONLINE_USERS = 'UPDATE_ONLINE_USERS';

const updateOnlineUsers = onlineUsers => {
    return {
        type: UPDATE_ONLINE_USERS,
        onlineUsers,
    };
};

export {
    UPDATE_ONLINE_USERS,
    updateOnlineUsers,
};
