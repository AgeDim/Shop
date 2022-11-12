import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, moderRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {useSelector} from "react-redux";
import axios from "../axiosAPI";

const AppRouter = () => {
    const state = useSelector(state => state.users);
    let isAdmin = state.isAdmin;
    let isModer = state.isModer;
    axios.get("/checkAdmin/" + state.login).then((response)=> isAdmin = response.data)
    axios.get("/checkModer/" + state.login).then((response)=> isModer = response.data)
    return (<Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>)}
            {isModer === true && moderRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>)}

            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
};

export default AppRouter;