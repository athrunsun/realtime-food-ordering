import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { hot } from 'react-hot-loader';

import configureStore, { history } from 'configureStore';
import App from 'components/App';

const initialState = {};

const store = configureStore(initialState);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        );
    }
}

export default hot(module)(Root);
