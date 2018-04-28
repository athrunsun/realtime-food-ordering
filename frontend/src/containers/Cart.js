import * as log from 'loglevel';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from 'containers/CartItem';
import { clearCart } from 'actions';

class Cart extends Component {
    handleClearCartClick = () => {
        const { dispatch } = this.props;
        dispatch(clearCart());
    };

    handleSubmitCartClick = () => {
        const { dispatch, cartItems, totalPrice } = this.props;

        if (cartItems == null || cartItems.length <= 0) {
            return;
        }

        log.debug(`Going to submit cart with a total price of ${totalPrice}...`);

        window.socket.emit('ordering', {
            meta: {
                timestamp: Date.now(),
            },
            payload: {
                foodList: cartItems,
                totalPrice: totalPrice,
            },
        });

        dispatch(clearCart());
    };

    render() {
        const { cartItems, totalPrice } = this.props;

        const cartItemsElements =
            cartItems == null || cartItems.length <= 0
                ? null
                : cartItems.map((item, index) => (
                      <div key={index} className="panel-block">
                          <CartItem food={item} />
                      </div>
                  ));

        return (
            <div className="tile is-parent">
                <div className="tile is-child">
                    <nav className="panel">
                        <div className="panel-heading">
                            <div className="level" style={{ width: '100%' }}>
                                <div className="level-left">购物车</div>
                                <div className="level-right">
                                    <span className="tag is-primary is-medium has-text-right">￥{totalPrice}</span>
                                </div>
                            </div>
                        </div>
                        {cartItemsElements}
                        <div className="panel-block">
                            <div className="columns" style={{ width: '100%' }}>
                                <div className="column is-half">
                                    <button
                                        className="button is-link is-fullwidth"
                                        onClick={this.handleSubmitCartClick}
                                    >
                                        提交
                                    </button>
                                </div>
                                <div className="column is-half">
                                    <button className="button is-fullwidth" onClick={this.handleClearCartClick}>
                                        清空
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPrice: state.cart.totalPrice,
        cartItems: state.cart.foodList,
    };
};

export default connect(mapStateToProps)(Cart);
