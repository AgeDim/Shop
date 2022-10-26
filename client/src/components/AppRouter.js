import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";

const AppRouter = () => {
    const isAuth = false
    const isAdmin = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact/>
            )}
            {isAuth && isAdmin && adminRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
};

export default AppRouter;