import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import * as log from 'loglevel';

import StoreSales from 'containers/StoreSales';
import MyOrderings from 'containers/MyOrderings';
import FoodList from 'containers/FoodList';
import Cart from 'containers/Cart';

import { recordSale, recordMyOrdering, updateOnlineUsers } from 'actions';

class Home extends Component {
    handleWindowOnLoad = () => {
        const { dispatch } = this.props;

        const socket = io(WEBSOCKET_SERVER, {
            query: {
                room: DEFAULT_ROOM_NAME,
            },
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            const socketId = socket.id;
            log.info(`Websocket connected, socketId: '${socketId}'`);

            socket.on(SOCKET_IO_EVENT_NAME_BROADCAST, msg => {
                const { meta, payload } = msg;
                log.debug(`Going to record a sale with total price of ${payload.totalPrice}...`);
                dispatch(recordSale({ userId: payload.userId, totalPrice: payload.totalPrice, timestamp: meta.timestamp }));
            });

            socket.on(SOCKET_IO_EVENT_NAME_USER_JOIN, msg => {
                const { meta, payload } = msg;
                log.debug(`User ${payload.userId} joined, going to update online users...`);
                dispatch(updateOnlineUsers(payload.currentOnlineUsers));
            });

            socket.on(SOCKET_IO_EVENT_NAME_USER_LEAVE, msg => {
                const { meta, payload } = msg;
                log.debug(`User ${payload.userId} left, going to update online users...`);
                dispatch(updateOnlineUsers(payload.currentOnlineUsers));
            });

            socket.on(socketId, msg => {
                const { meta, payload } = msg;
                log.debug(`Going to record an ordering with total price of ${payload.totalPrice}...`);
                dispatch(recordMyOrdering({ userId: payload.userId, totalPrice: payload.totalPrice, timestamp: meta.timestamp }));
            });
        });

        window.socket = socket;
    };

    componentDidMount() {
        window.addEventListener('load', this.handleWindowOnLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleWindowOnLoad);
    }

    render() {
        return (
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-parent">
                        <StoreSales />
                        <MyOrderings />
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-8">
                        <FoodList />
                    </div>
                    <div className="tile">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Home);
