import React, { Component } from 'react';

class MyOrderings extends Component {
    render() {
        return (
            <div className="tile is-child">
                <nav className="panel">
                    <p className="panel-heading">我的订餐</p>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-code-fork" aria-hidden="true" />
                        </span>
                        daniellowtw/infboard
                    </a>
                </nav>
            </div>
        );
    }
}

export default MyOrderings;
