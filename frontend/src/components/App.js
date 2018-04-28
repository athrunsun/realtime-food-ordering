import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from 'containers/Navbar';
import Home from 'containers/Home';

class App extends Component {
    render() {
        return (
            <section className="section">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </section>
        );
    }
}

export default App;
