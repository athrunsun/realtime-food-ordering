import * as log from 'loglevel';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';

import Root from 'components/Root';

log.setLevel(log.levels.DEBUG);

ReactDOM.render(
    <Root />,
    document.querySelector('#root'),
);
