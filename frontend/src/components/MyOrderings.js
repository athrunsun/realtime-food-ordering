import React, { Component } from 'react';
import { connect } from 'react-redux';

import MyOrdering from 'components/MyOrdering';

class MyOrderings extends Component {
    render() {
        const { orderingRecords } = this.props;

        const orderingRecordsElements =
            orderingRecords == null || orderingRecords.length <= 0
                ? null
                : orderingRecords.map((record, index) => <MyOrdering key={index} orderingRecord={record} />);
        
        return (
            <div className="tile is-child">
                <nav className="panel">
                    <p className="panel-heading">我的实时订餐情况</p>
                    {orderingRecordsElements}
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderingRecords: state.myOrderings.orderingRecords,
    };
};

export default connect(mapStateToProps)(MyOrderings);
