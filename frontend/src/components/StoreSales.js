import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreSaleRecord from 'components/StoreSaleRecord';

class StoreSales extends Component {
    render() {
        const { salesRecords, onlineUsers } = this.props;

        const salesRecordsElements =
            salesRecords == null || salesRecords.length <= 0
                ? null
                : salesRecords.map((record, index) => <StoreSaleRecord key={index} saleRecord={record} />);

        return (
            <div className="tile is-child">
                <nav className="panel">
                    <div className="panel-heading">
                        <div className="level" style={{ width: '100%' }}>
                            <div className="level-left">店铺实时销售情况</div>
                            <div className="level-right">
                                当前在线人数<span className="tag is-primary is-medium has-text-right">
                                    {onlineUsers == null ? 0 : onlineUsers.length}
                                </span>
                            </div>
                        </div>
                    </div>
                    {salesRecordsElements}
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        salesRecords: state.storeSales.salesRecords,
        onlineUsers: state.onlineUsers.list,
    };
};

export default connect(mapStateToProps)(StoreSales);
