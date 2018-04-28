import React, { Component } from 'react';

import { convertTimestampInMilliSecondsToDate } from 'utils/datetimeUtil';

class MyOrdering extends Component {
    render() {
        const { orderingRecord } = this.props;

        return (
            <div className="panel-block">
                你于<span className="tag is-primary">{convertTimestampInMilliSecondsToDate(orderingRecord.timestamp)}</span>订餐，总金额<span className="tag is-primary">
                    ￥{orderingRecord.totalPrice}
                </span>
            </div>
        );
    }
}

export default MyOrdering;
