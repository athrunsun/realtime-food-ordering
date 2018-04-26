'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async ordering() {
        const { ctx, app } = this;
        const { io, logger, config } = app;
        const nsp = io.of('/');
        const incomingMsg = ctx.args[0] || {};
        const socket = ctx.socket;
        const socketId = socket.id;
        const query = socket.handshake.query;
        const { room, userId } = query;

        try {
            const { meta, payload } = incomingMsg;
            const { food } = payload;
            
            if (!food) {
                logger.error('No food is specified in the message!');
                return;
            }
            
            const outgoingMsg = ctx.helper.normalizeMsg('Food ordering succeeded!');
            nsp.emit(socketId, outgoingMsg);
            nsp.to(room).emit(config.broadcastEventName, outgoingMsg);
        } catch (error) {
            logger.error(error);
        }
    }
}

module.exports = OrderController;
