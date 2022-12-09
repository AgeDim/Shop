import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import back from "../assets/back.png";
import pik from "../assets/row1.jpg";
import backet from "../assets/backetBtn.png";
import {useHistory, useParams} from "react-router-dom";
import Counter from "../components/Counter";
import "./css/productPage.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import typeOf from "validator/es/lib/util/typeOf";
import {getProductById} from "../http/productAPI";

const ProductPage = observer(() => {
    const history = useHistory()
    const {id} = useParams()
    const [prod1, setProd1] = useState({id: '',
        type: '',
        name: '',
        price: 0,
        description:''})
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const keys = prod1.description.replaceAll('"', '').replaceAll('{','').replaceAll('}','').split(',')
    useLayoutEffect(() => {
        getProductById(id).then(data => setProd1(data))
    }, [])
    function compare() {
        for (let i = 0; i < basket.prod.length; i++) {
            if (basket.prod[i].id === prod1.id) {
                return true;
            }
        }
        return false;
    }

    const addProductToBasket = () => {
        if (user.isAuth) {
            if (!compare()) {
                basket.addProducts({
                    id: prod1.id,
                    amount: document.getElementById("counterVal").innerText,
                    price: prod1.defaultPrice
                })
                alert("Продукт добавлен в корзину!")
            }else{
                alert("Продукт уже есть в корзине!")
            }


        } else {
            alert("Вы не можете добавлять продукты в корзину, зарегистрируйтесь!")
        }
    }
    const list = []

    for (let i=0;i<keys.length;i+=2) {
        list.push(<h5>{keys[i]}: {keys[i+1]}</h5>)
    }
    return (<Card className="align-self-center" style={{height: 590, marginTop: 10, marginRight: 20, marginLeft: 20}}>
        <Row className="align-content-start"><Button id="btn" className="p-2" variant="outline-light" style={{
            background: "rgba(0, 0, 0, 0)", borderColor: "rgba(0, 0, 0, 0)", width: 240, marginLeft: 5
        }} onClick={() => history.goBack()}><img
            src={back}/></Button></Row>

        <Row>
            <Col md={7} className="d-flex justify-content-center"><Image src={`data:image/jpeg;base64,${prod1.img}`} width={450} height={450}
                                                                         style={{
                                                                             marginLeft: 50,
                                                                             marginTop: 20,
                                                                             borderRadius: 20
                                                                         }}></Image></Col>
            <Col md={4} className="d-flex">
                <Col id="123">
                    <Row>
                        <h2>{prod1.name}</h2>
                    </Row>
                    <Row>
                        <h3>{prod1.defaultPrice} РУБ</h3>
                        <h3>Характеристики:</h3>
                        {list}
                    </Row>
                    <Row><Counter product={prod1}/></Row>
                    <Row style={{paddingTop: 10}}>
                        <Button className="p-2" onClick={addProductToBasket} style={{
                            background: "rgba(0, 0, 0, 0)", borderColor: "rgba(0, 0, 0, 0)", width: 240
                        }}><img
                            src={backet} alt=""/></Button>
                    </Row>
                </Col>
            </Col>
        </Row>
    </Card>);
});

export default ProductPage;