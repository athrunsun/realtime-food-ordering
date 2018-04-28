import React, { Component } from 'react';
import { connect } from 'react-redux';

import { insertTestData } from 'actions';

class Navbar extends Component {
    handleInsertTestDataClick = () => {
        const { dispatch } = this.props;
        dispatch(insertTestData());
    };

    render() {
        return (
            <nav className="navbar is-fixed-top is-info">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <span className="icon">
                            <i className="fas fa-utensils" />
                        </span>
                        <span>实时在线订餐系统</span>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            主页
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <button
                                        className="button is-link"
                                        onClick={this.handleInsertTestDataClick}
                                    >
                                        <span>插入测试数据</span>
                                    </button>
                                </p>
                                <p className="control">
                                    <a
                                        className="button is-primary"
                                        href="https://github.com/athrunsun/realtime-food-ordering"
                                    >
                                        <span className="icon">
                                            <i className="fas fa-github" />
                                        </span>
                                        <span>源代码</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect()(Navbar);
