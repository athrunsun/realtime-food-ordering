'use strict';

module.exports = app => {
    return async (ctx, next) => {
        const { app, socket, logger, helper } = ctx;
        const { io, config } = app;
        const socketId = socket.id;
        const nsp = io.of('/');
        const query = socket.handshake.query;

        const { room } = query;
        const rooms = [ room ];

        logger.debug(`User '${socketId}' connected and wants to join room '${room}'`);

        const tick = (socketId, msg) => {
            logger.debug(`Going to tick user '${socketId}', message: ${msg}`);
            socket.emit(socketId, helper.normalizeMsg(msg));

            nsp.adapter.remoteDisconnect(socketId, true, err => {
                logger.error(err);
            });
        };

        const roomExists = await app.redis.get(room);
        logger.debug(`Room '${room}' exists: ${roomExists}`);

        if (!roomExists) {
            tick(socketId, `Room '${room}' does NOT exist!`);
            return;
        }

        logger.debug(`User '${socketId}' is going to join room '${room}'`);
        socket.join(room);

        nsp.adapter.clients(rooms, (err, clients) => {
            logger.debug('Current online users: ', clients);

            nsp.to(room).emit(config.socketIOEventName.userJoin, {
                payload: {
                    currentOnlineUsers: clients,
                    userId: socketId,
                },
            });
        });

        await next();

        logger.debug(`User '${socketId}' is leaving room '${room}'`);

        nsp.adapter.clients(rooms, (err, clients) => {
            logger.debug('Current online users: ', clients);

            nsp.to(room).emit(config.socketIOEventName.userLeave, {
                payload: {
                    currentOnlineUsers: clients,
                    userId: socketId,
                },
            });
        });
    };
};
