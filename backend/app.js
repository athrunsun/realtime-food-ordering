'use strict';

module.exports = app => {
    app.beforeStart(async () => {
        const room = await app.redis.get(app.config.defaultRoomName);
        
        if (!room) {
            await app.redis.set(app.config.defaultRoomName, app.config.defaultRoomName);
        }

        // Sync model to db: https://github.com/eggjs/egg-sequelize#sync-model-to-db
        // "sync" method of Sequelize class: http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-sync
        await app.model.sync();
    });
};
