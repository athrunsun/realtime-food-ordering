import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './index.less';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <div className="black-box">
            This is a black box!
        </div>
        <div className="blue-box">
            This is a blue box!
            <a href="#">This is a link!</a>
        </div>
    </div>, 
    document.querySelector('#root')
);

//console.log('This is an error!');
