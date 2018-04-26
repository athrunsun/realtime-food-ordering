'use strict';

module.exports = app => {
    app.beforeStart(async () => {
        const room = await app.redis.get(app.config.defaultRoomName);
        if (!room) {
            await app.redis.set(app.config.defaultRoomName, app.config.defaultRoomName);
        }
    });
};
