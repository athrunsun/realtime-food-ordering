import React, { Component } from 'react';
import io from 'socket.io-client';

import StoreSales from 'components/StoreSales';
import MyOrderings from 'components/MyOrderings';
import FoodList from 'components/FoodList';
import Cart from 'components/Cart';

class Home extends Component {
    handleWindowOnLoad = () => {
        const socket = io(WEBSOCKET_SERVER, {
            query: {
                room: DEFAULT_ROOM_NAME,
            },
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            const id = socket.id;

            console.log('#connect,', id, socket);

            socket.on(id, msg => {
                console.log('#receive,', msg);
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

export default Home;
