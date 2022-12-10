import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {FiTrash2} from "react-icons/fi";
import {observer} from "mobx-react-lite";

const FavoriteItem = observer(({favoriteItem, deleteFromFavorite}) => {
    return (<Card style={{marginLeft: 23, marginTop: 5}}>
        <Row>
            <Col md={1} className="align-self-center">
                <FiTrash2 className="align-self-center" onClick={() => {
                    deleteFromFavorite(favoriteItem.id)
                }} style={{cursor: "pointer", color: "red"}} size={30}/>
            </Col>
            <Col md={11} className="d-flex justify-content-start">
                <Row><Image style={{width: 150, height: 150}} src={`data:image/jpeg;base64,${favoriteItem.img}`}/></Row>
                <Row><h2>{favoriteItem.name}</h2></Row>
                <Row style={{marginLeft: 40}}><h2>Цена: {favoriteItem.defaultPrice} РУБ.</h2></Row>
            </Col>
        </Row>
    </Card>);
});

export default FavoriteItem;