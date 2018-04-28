import { UPDATE_ONLINE_USERS } from 'actions';

const onlineUsers = (
    onlineUsers = {
        list: [],
    },
    action,
) => {
    switch (action.type) {
    case UPDATE_ONLINE_USERS:
        return Object.assign({}, onlineUsers, { list: action.onlineUsers });
    default:
        return onlineUsers;
    }
};

export { onlineUsers };
