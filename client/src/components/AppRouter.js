import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, moderRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import axios from "../axiosAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    let isModer = false
    let isAdmin = false
    if (user.isAuth) {
        axios.get("/checkAdmin/" + user.user.email).then((response) => isAdmin = response.data)
        axios.get("/checkModer/" + user.user.email).then((response) => isModer = response.data)
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
});

export default AppRouter;