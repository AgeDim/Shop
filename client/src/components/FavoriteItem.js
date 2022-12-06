import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Col, Image, Row} from "react-bootstrap";
import {FiTrash2} from "react-icons/fi";
import holder from "../assets/holder.png";
import {observer} from "mobx-react-lite";

const FavoriteItem = observer(({favoriteItem, deleteFromFavorite}) => {
    return (<Card style={{marginLeft: 40, marginTop: 10, height: 170, paddingTop: 5, paddingBottom: 5}}>
        <Row className="flex-fill">
            <Col md={1} className="align-self-center">
                <FiTrash2 className="align-self-center" onClick={() => {
                    deleteFromFavorite(favoriteItem.id)
                }} style={{cursor: "pointer", color: "red"}} size={30}/>
            </Col>
            <Col className="d-flex justify-content-start">
                <Row><Image src={holder}/></Row>
                <Row><h2>{favoriteItem.name}</h2></Row>
            </Col>
        </Row>
    </Card>);
});

export default FavoriteItem;