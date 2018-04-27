import React, { Component } from 'react';

class Navbar extends Component {
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
                                    <a
                                        className="button is-primary"
                                        href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip"
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

export default Navbar;
