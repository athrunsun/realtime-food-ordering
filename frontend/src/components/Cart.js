import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="tile is-parent">
                <div className="tile is-child">
                    <nav className="panel flex">
                        <p className="panel-heading">购物车</p>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fas fa-code-fork" aria-hidden="true" />
                            </span>
                            daniellowtw/infboard
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fas fa-code-fork" aria-hidden="true" />
                            </span>
                            daniellowtw/infboard
                        </a>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Cart;
