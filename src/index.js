import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '_containers/App/index';
import registerServiceWorker from './registerServiceWorker';

import configureStore from '_store/configureStore';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}><App/></Provider>
), document.getElementById('root'));

registerServiceWorker();
