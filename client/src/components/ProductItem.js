import React, {useContext, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/const";
import "./css/ProductItem.css"
import {observer} from "mobx-react-lite";
import {AiOutlineStar} from "react-icons/ai";
import {Text} from "@nextui-org/react";
import placeHolder from "../assets/place_holder.png";
import {Context} from "../index";


const ProductItem = observer(({product}) => {
    const history = useHistory()
    const {favorite} = useContext(Context)
    const [isActive, setIsActive] = useState(false)

    function compare() {
        for (let i = 0; i < favorite.prod.length; i++) {
            if (favorite.prod[i].id === product.id) {
                return true;
            }
        }
        return false;
    }

    const handleClick = () => {
        setIsActive(current => !current);
        if (!isActive) {
            if (!compare()) {
                favorite.addFavorite(product)
                console.log(favorite.prod)
            }
        }
        if (isActive) {
            favorite.setFavorite(favorite.prod.filter((item) => item.id !== product.id))
            console.log(favorite.prod)
        }
    };
    return (<Col md={4} style={{width: 310, margin: 1}}>
        <Row className="g-0">
            <div id="productCard">
                <Card style={{width: 310, borderRadius: "7% 7% 7% 7%", padding: 7}}>
                    <div className="d-flex" style={{width: 310}}><Text id="ProductItemText"
                                                                       style={{marginBottom: 0, cursor: "pointer"}}
                                                                       onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>{product.name}</Text><AiOutlineStar
                        style={{right: 4, top: 4, position: "absolute", fill: isActive ? 'orangered' : ''}} size={25}
                        onClick={() => {
                            handleClick()
                        }}/></div>
                    <Image style={{cursor: "pointer"}} src={placeHolder}
                           onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}/>

                </Card>
            </div>
        </Row>
    </Col>);
});

export default ProductItem;