import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from 'actions';

class AddToCartButton extends Component {
    _handleClick = () => {
        const { food, dispatch } = this.props;
        dispatch(addToCart(food));
    };

    render() {
        return (
            <button 
                className="button is-primary is-outlined is-fullwidth"
                onClick={this._handleClick}
            >
                加入购物车
            </button>
        );
    }
}

class Food extends Component {
    render() {
        const { food, dispatch } = this.props;

        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong>
                                <br />
                                {food.description}
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <p>￥{food.price}</p>
                            </div>
                            <div className="level-right">
                                <p>
                                    <AddToCartButton food={food} dispatch={dispatch} />
                                </p>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
    };
};

export default connect()(Food);
