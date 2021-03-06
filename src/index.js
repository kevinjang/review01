import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KApp from './kaikeba-redux/KApp'
// import * as serviceWorker from './serviceWorker';

// import store from './store'

import {Provider} from 'react-redux'

import {createStore,applyMiddleware} from 'redux'
// import {counterReducer} from './reducers/counter.redux'
// import 
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import {BrowserRouter} from 'react-router-dom'

// const store = createStore(counterReducer,applyMiddleware(logger,thunk))

import store from './kaikeba-redux/kstore'

const render = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <KApp />
            </Provider>
        </BrowserRouter>, 
        document.getElementById('root'));
}

render()

store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
