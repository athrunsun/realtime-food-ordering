import React, { Component } from 'react';

class StoreSales extends Component {
    render() {
        return (
            <div className="tile is-child">
                <nav className="panel">
                    <p className="panel-heading">店铺实时销售情况</p>
                    <a className="panel-block is-active">
                        <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true" />
                        </span>
                        bulma
                    </a>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true" />
                        </span>
                        marksheet
                    </a>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true" />
                        </span>
                        minireset.css
                    </a>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-book" aria-hidden="true" />
                        </span>
                        jgthms.github.io
                    </a>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-code-fork" aria-hidden="true" />
                        </span>
                        daniellowtw/infboard
                    </a>
                    <a className="panel-block">
                        <span className="panel-icon">
                            <i className="fas fa-code-fork" aria-hidden="true" />
                        </span>
                        mojs
                    </a>
                </nav>
            </div>
        );
    }
}

export default StoreSales;
