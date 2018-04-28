import React, { Component } from 'react';
import { connect } from 'react-redux';

import Food from 'containers/Food';
import { fetchFoodList } from 'actions';

class FoodList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchFoodList());
    }

    render() {
        const { foodList } = this.props;
        
        const foodListElements = foodList == null || foodList.length <= 0 ? null : foodList.map((food, index) => (
            <div className="column is-half" key={index}>
                <Food food={food}/>
            </div>
        ));

        return (
            <div className="tile is-parent">
                <div className="tile is-child">
                    <div className="columns is-multiline">
                        {foodListElements}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        foodList: state.foodList.list,
    };
};

export default connect(mapStateToProps)(FoodList);
