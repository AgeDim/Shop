import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css"
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import BasketStore from "./store/BasketStore";
import OrderStore from "./store/OrderStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore(),
        basket: new BasketStore(),
        orders: new OrderStore()
    }}>
        <App/>
    </Context.Provider>
);