import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {adminRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import axios from "../axiosAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getFavorite} from "../http/userAPI";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    const {favorite} = useContext(Context)
    let isAdmin = user.isAdmin
    const setFav = (data) => {
        favorite.setFavorite(data)
    }
    if (user.isAuth) {
        console.log(user.user.email)
        axios.get("/checkAdmin/" + user.user.email).then((response) => {
            isAdmin = response.data;
            user.setIsAdmin(response.data)
        })
        getFavorite(user.user.email, setFav)
    }

    return (<Switch>
            {publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
});

export default AppRouter;