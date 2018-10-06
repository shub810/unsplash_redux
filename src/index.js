import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route';


// Redux react-redux
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddlware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddlware)(createStore);

const App = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));