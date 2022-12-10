import React from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import FavoriteItem from "./FavoriteItem";


const FavoriteList = observer(({favorite}) => {
    const deleteFromFavorite = (id) => {
        favorite.setFavorite(favorite.prod.filter((product) => id !== product.id))
    }
    return (<Row>
        {favorite.prod.map(product => <FavoriteItem key={product.id} favoriteItem={product}
                                                    deleteFromFavorite={deleteFromFavorite}/>)}
    </Row>);
});

export default FavoriteList;