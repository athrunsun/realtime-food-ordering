import React, { Component } from 'react';

import Food from 'components/Food';

class FoodList extends Component {
    render() {
        return (
            <div className="tile is-parent">
                <div className="tile is-child">
                    <div className="columns is-multiline">
                        <div className="column is-half">
                            <Food />
                        </div>
                        <div className="column is-half">
                            <Food />
                        </div>
                        <div className="column is-half">
                            <Food />
                        </div>
                        <div className="column is-half">
                            <Food />
                        </div>
                        <div className="column is-half">
                            <Food />
                        </div>
                        <div className="column is-half">
                            <Food />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodList;
