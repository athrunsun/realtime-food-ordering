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
        const { room } = query;

        try {
            const { meta, payload } = incomingMsg;
            const { foodList, totalPrice } = payload;

            if (!foodList) {
                logger.error('No food is specified when submitting order!');
                return;
            }

            const outgoingMsg = ctx.helper.normalizeMsg({ userId: socketId, totalPrice });
            logger.debug(`Sending broadcasting message...`);
            nsp.to(room).emit(config.socketIOEventName.broadcast, outgoingMsg);
            logger.debug(`Sending message to user '${socketId}'...`);
            nsp.emit(socketId, outgoingMsg);
        } catch (error) {
            logger.error(error);
        }
    }
}

module.exports = OrderController;
