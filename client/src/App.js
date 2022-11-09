import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import {useSelector} from "react-redux";

const App = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (<BrowserRouter>
        <NavBar/>
        <AppRouter/>
        <FooterBar/>
    </BrowserRouter>);

};

export default App;
