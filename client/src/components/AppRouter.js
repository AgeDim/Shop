import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            {user._isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user._isAuth && user._isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
};

export default AppRouter;