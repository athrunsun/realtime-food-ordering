'use strict';

module.exports = app => {
    return async (ctx, next) => {
        const { app, socket, logger, helper } = ctx;
        const { io } = app;
        const id = socket.id;
        const nsp = io.of('/');
        const query = socket.handshake.query;

        const { room, userId } = query;
        const rooms = [ room ];

        logger.debug('#user_info', id, room, userId);

        io.on('connection', socket => {
            io.emit('some event', { for: 'everyone' });
        });

        const tick = (id, msg) => {
            logger.debug('#tick', id, msg);

            // 踢出用户前发送消息
            socket.emit(id, helper.parseMsg('deny', msg));

            // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
            nsp.adapter.remoteDisconnect(id, true, err => {
                logger.error(err);
            });
        };

        const hasRoom = await app.redis.get(room);
        logger.debug('#has_exist', hasRoom);

        if (!hasRoom) {
            tick(id, {
                type: 'nonexistent',
                message: `Room '${room}' does NOT exist!`,
            });
            return;
        }

        // 用户加入
        logger.debug('#join', room);
        socket.join(room);

        // 在线列表
        nsp.adapter.clients(rooms, (err, clients) => {
            logger.debug('#online_join', clients);

            // 更新在线用户列表
            nsp.to(room).emit('online', {
                clients,
                action: 'join',
                target: 'participator',
                message: `User(${id}) joined.`,
            });
        });

        await next();

        // 用户离开
        logger.debug('#leave', room);

        // 在线列表
        nsp.adapter.clients(rooms, (err, clients) => {
            logger.debug('#online_leave', clients);

            // 更新在线用户列表
            nsp.to(room).emit('online', {
                clients,
                action: 'leave',
                target: 'participator',
                message: `User(${id}) leaved.`,
            });
        });
    };
};
