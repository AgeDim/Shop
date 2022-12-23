import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/const";
import "./css/ProductItem.css"
import {observer} from "mobx-react-lite";
import {AiOutlineStar} from "react-icons/ai";
import {Text} from "@nextui-org/react";
import {Context} from "../index";


const ProductItem = observer(({products}) => {
    const history = useHistory()
    const {favorite} = useContext(Context)
    const [isActive, setIsActive] = useState(false)

    function compare() {
        for (let i = 0; i < favorite.prod.length; i++) {
            if (favorite.prod[i].id === products.id) {
                return true;
            }
        }
        return false;
    }

    const getActive = () => {
        let active = false
        favorite.prod.map((prod) => {
            if (prod.id == products.id) {
                active = true
            }
        })
        return active
    }
    useEffect(() => {
        setIsActive(getActive())
    }, [])
    const handleClick = () => {
        setIsActive(current => !current);
        if (!isActive) {
            if (!compare()) {
                favorite.addFavorite(products)
                console.log(favorite.prod)
            }
        }
        if (isActive) {
            favorite.setFavorite(favorite.prod.filter((item) => item.id !== products.id))
        }
    };
    return (<Col md={4} style={{width: 310, margin: 3}}>
        <Row className="g-0">
            <div id="productCard">
                <Card style={{width: 310, borderRadius: "15px", padding: 9, borderColor:"black"}}>
                    <div className="d-flex" style={{width: 310}}><Text id="ProductItemText"
                                                                       style={{marginBottom: 0, cursor: "pointer"}}
                                                                       onClick={() => history.push(PRODUCT_ROUTE + '/' + products.id)}>{products.name}</Text><AiOutlineStar
                        style={{right: 4, top: 4, position: "absolute", fill: isActive ? 'orangered' : ''}} size={25}
                        onClick={() => {
                            handleClick()
                        }}/></div>
                    <Image className="align-self-center"
                           style={{cursor: "pointer", width: 270, height: 220, borderRadius: "15px"}}
                           src={`data:image/jpeg;base64,${products.img}`}
                           onClick={() => history.push(PRODUCT_ROUTE + '/' + products.id)}/>

                </Card>
            </div>
        </Row>
    </Col>);
});

export default ProductItem;