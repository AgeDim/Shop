import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css"
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import BasketStore from "./store/BasketStore";
import OrderStore from "./store/OrderStore";
import FavoriteStore from "./store/FavoriteStore";
import FishStore from "./store/FishStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore(),
        basket: new BasketStore(),
        orders: new OrderStore(),
        favorite: new FavoriteStore(),
        fish: new FishStore()
    }}>
        <App/>
    </Context.Provider>
);