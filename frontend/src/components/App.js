import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from 'components/Navbar';
import Home from 'components/Home';

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
