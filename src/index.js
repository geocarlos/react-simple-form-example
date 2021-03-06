import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

/**
"A programmer is by nature good; it is kludge which ruins him"
    ~ Jean-Jacques Rousseau
*/
