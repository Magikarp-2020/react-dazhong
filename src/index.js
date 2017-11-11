import React from 'react';
import ReactDOM from 'react-dom';
import App from '_containers/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
