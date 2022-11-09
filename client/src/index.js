import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css"
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./store/UserStore"
import axios from "axios";
import productReducer from "./store/ProductStore";
import reportWebVitals from "./reportWebVitals";

const localStorageMiddleware = ({getState}) => next => action => {
    const result = next(action);
    localStorage.setItem('user', JSON.stringify(getState().users.user));
    return result;
};

const loadFromLocalStorage = () => {
    if (localStorage.getItem('user') !== null) {
        return {users: {user: JSON.parse(localStorage.getItem('user'))}}
    }
    return undefined;
}

const store = configureStore({
    reducer: {
        users: userReducer, products: productReducer
    },
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

axios.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = store.getState().users.user.token;
    } catch (e) {
        // do nothing, no token exists;
    }
    return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App/>
</Provider>);

reportWebVitals();