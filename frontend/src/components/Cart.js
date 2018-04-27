import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from 'components/CartItem';
import { clearCart } from 'actions';

class Cart extends Component {
    handleClearCartClick = () => {
        const { dispatch } = this.props;
        dispatch(clearCart());
    };

    render() {
        const { foodList } = this.props;

        const foodTotalPrice =
            foodList == null || foodList.length <= 0
                ? 0
                : foodList.reduce((accumulator, food) => {
                      const priceAsFloat = +parseFloat(food.price).toFixed(2);
                      return accumulator + priceAsFloat;
                  }, 0);

        const cartItemsElements =
            foodList == null || foodList.length <= 0
                ? null
                : foodList.map((item, index) => (
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
                                    <span className="has-text-right">￥{foodTotalPrice}</span>
                                </div>
                            </div>
                        </div>
                        {cartItemsElements}
                        <div className="panel-block">
                            <div className="columns" style={{ width: '100%' }}>
                                <div className="column is-half">
                                    <button className="button is-link is-fullwidth">提交</button>
                                </div>
                                <div className="column is-half">
                                    <button className="button is-fullwidth" onClick={this.handleClearCartClick}>清空</button>
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
        foodList: state.cart.foodList,
    };
};

export default connect(mapStateToProps)(Cart);
