import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";
import FavoriteList from "../components/FavoriteList";

const FavoritePage = () => {
    const {favorite} = useContext(Context)
    return (<Row className="g-0">
        <Row>
            <Card className="align-items-center" style={{marginLeft: 10}}><h2>Избранное</h2></Card>
        </Row>
        <Row>
            <FavoriteList favorite={favorite}></FavoriteList>
        </Row>
    </Row>);
};

export default FavoritePage;