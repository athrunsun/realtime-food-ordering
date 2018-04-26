import React, { Component } from 'react';
import io from 'socket.io-client';

class Home extends Component {
    handleWindowOnLoad = () => {
        const socket = io('http://localhost:7001/', {
            query: {
                room: 'food-ordering',
                userId: `client_${Math.random()}`,
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
        return <div>This is the home page!</div>;
    }
}

export default Home;
