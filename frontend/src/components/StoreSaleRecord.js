import React, { Component } from 'react';

import { convertTimestampInMilliSecondsToDate } from 'utils/datetimeUtil';

class StoreSaleRecord extends Component {
    render() {
        const { saleRecord } = this.props;

        return (
            <div className="panel-block">
                用户<span className="tag is-primary">{saleRecord.userId}</span>于<span className="tag is-primary">
                    {convertTimestampInMilliSecondsToDate(saleRecord.timestamp)}
                </span>订餐，总金额<span className="tag is-primary">￥{saleRecord.totalPrice}</span>
            </div>
        );
    }
}

export default StoreSaleRecord;
