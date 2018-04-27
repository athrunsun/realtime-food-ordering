import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from 'actions';

class RemoveFromCartButton extends Component {
    _handleClick = () => {
        const { dispatch, food } = this.props;
        dispatch(removeFromCart(food));
    };

    render() {
        return (
            <a className="icon" onClick={this._handleClick}>
                <i className="fas fa-times has-text-danger"></i>
            </a>
        );
    }
}

class CartItem extends Component {
    render() {
        const { dispatch, food } = this.props;

        return (
            <div className="level" style={{width: '100%'}}>
                <div className="level-left">{food.name}</div>
                <div className="level-right">
                    ￥{food.price}
                    <RemoveFromCartButton dispatch={dispatch} food={food}/>
                </div>
            </div>
        );
    }
}

export default connect()(CartItem);
