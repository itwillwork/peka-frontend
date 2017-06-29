import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'

import './main.css';
import "babel-polyfill";
import rootReducers from './redux/index';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import IndexPage from './components/IndexPage/IndexPage';
import SearchPage from './components/SearchPage/SearchPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const store = createStore(
    combineReducers({
        ...rootReducers,
        routing: routerReducer,
    }),
    applyMiddleware(thunk)
);

//todo remove temp or for DEV mode
global.getStore = () => store.getState();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={IndexPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="*" component={NotFoundPage} />
        </Router>
    </Provider>
    , document.getElementById('root')
);