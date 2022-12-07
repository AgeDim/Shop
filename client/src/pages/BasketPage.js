import React, {useContext, useEffect} from 'react';
import BasketList from "../components/BasketList";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import orderBtn from "../assets/orderBtn.png"
import {submitOrder} from "../http/orderAPI";

const BasketPage = observer(() => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const {product} = useContext(Context)
    let res = 0;
    console.log(basket.prod)
    const calcPrice = () => {
        res = 0;
        basket.prod.map(product => {
            res += product.price * product.amount
        })
        basket.setGenPrice(res)
    }
    const submit = async () => {
        const prod = basket.prod.map(product => {delete product['price']})
        try {
            const data = await submitOrder(user.user.email, basket.prod)
            basket.setProdukt([])
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    useEffect(() => {
        calcPrice()
    }, [basket.prod])
    calcPrice()
    return (<Row className="g-0">
        <Row>
            <Card style={{marginLeft: 20, marginRight: 20}}>
                <div className="d-flex align-items-center"><h1 className="bottom-0"
                                                               style={{marginTop: 5, marginBottom: 5}}>Моя Корзина</h1>
                    <h4
                        style={{margin: 0, marginLeft: 30}}>Кол-во товаров {basket.prod.length}</h4>
                </div>
            </Card>
        </Row>
        <Col md={6} style={{marginRight: 50}}>
            <BasketList calcPrice={calcPrice} basket={basket}/>
        </Col>
        <Col md={5}><Card className="me-0" style={{height: 530, width: 690, marginTop: 10}}>
            <h2 className="text-center"> Условия заказа</h2>
            <Row>
                <div className="d-flex"><h3 className="justify-content-start" style={{marginLeft: 10}}>Итого:</h3><h2
                    style={{marginLeft: 400}}>{res} Руб.</h2></div>
            </Row>
            <Button style={{height: 100, width: 300}} className="align-self-center" onClick={() => {
                submit()
            }} variant="outline-light"><img src={orderBtn} alt=""/></Button>
        </Card></Col>
    </Row>);
});

export default BasketPage;