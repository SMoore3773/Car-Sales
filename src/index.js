import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from'redux';
import {newreducer} from './reducers/newreducer';
import 'bulma/css/bulma.css';
import './styles.scss';

//state Store and Provider created here to assure that every component within App has access to the store and state that it holds.
const store = createStore(newreducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
