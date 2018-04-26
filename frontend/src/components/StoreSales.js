import React, { Component } from 'react';

class StoreSales extends Component {
    render() {
        return (
            <div className="tile is-child">
                <nav className="panel">
                    <p className="panel-heading">店铺销售</p>
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
                    <label className="panel-block">
                        <input type="checkbox" />
                        remember me
                    </label>
                    <div className="panel-block">
                        <button className="button is-link is-outlined is-fullwidth">reset all filters</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default StoreSales;
