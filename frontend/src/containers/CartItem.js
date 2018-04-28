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
            <a className="tag is-delete is-danger" onClick={this._handleClick} style={{marginLeft: '5px'}}></a>
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
