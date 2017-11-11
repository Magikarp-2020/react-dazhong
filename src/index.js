import React from 'react';
import ReactDOM from 'react-dom';
import App from '_containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import reduxDemo from './redux-demo';

reduxDemo();

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
