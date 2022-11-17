import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, moderRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {useSelector} from "react-redux";
import axios from "../axiosAPI";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    let isAuth = user.isAuth;
    let isAdmin = user.isAdmin;
    let isModer = user.isModer;
    const current = user.getUser
    if (isAuth) {
        axios.get("/checkAdmin/" + current.login).then((response) => isAdmin = response.data)
        axios.get("/checkModer/" + current.login).then((response) => isModer = response.data)
    }
    return (<Switch>
            {publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            {isModer === true && moderRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
};

export default AppRouter;