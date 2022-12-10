import React, {useContext, useEffect, useState} from 'react';
import BasketList from "../components/BasketList";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import orderBtn from "../assets/orderBtn.png"
import {submitOrder} from "../http/orderAPI";
import {Dropdown} from "@nextui-org/react";
import {getSoS} from "../http/EditProductCount";

const BasketPage = observer(() => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    let res = 0;
    const [selected, setSelected] = useState('Выберите пункт покупки');
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [error, setError] = useState(' ')

    useEffect(() => {
        getSoS('shop', setData1)
        getSoS('storage', setData2)
    }, [])
    console.log(data1)
    const calcPrice = () => {
        res = 0;
        basket.prod.map(product => {
            res += product.price * product.amount
        })
        basket.setGenPrice(res)
    }

    const submit = async (selected) => {
        basket.prod.map(product => {
            delete product['price']
        })

        try {
            const data = await submitOrder(user.user.email, basket.prod, selected)
            basket.setProdukt([])
        } catch (e) {
            const err = e.response.data
            setError(e.response.data)
            basket.setGenPrice(0)
            basket.setProdukt([])
        }
    }

    const getError = (err) => {
        let res = err.split(';\\')
        res = res[0]
        return res.replace('ERROR: ', '')
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
            <Row className="align-self-center mb-4">
                <Dropdown>
                    <Dropdown.Button flat color="secondary" shadow>
                        {selected}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                    >
                        {data1.map(shop => (<Dropdown.Item key={'Магазин № ' + shop}>Магазин № {shop}</Dropdown.Item>))}
                        {data2.map(storage => (
                            <Dropdown.Item key={'Склад № ' + storage}>Склад № {storage}</Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <h3 className="align-self-center" style={{marginTop: 10, marginBottom: 10}}>{getError(error)}</h3>
            <Button style={{height: 100, width: 300}} className="align-self-center" onClick={() => {
                submit(selected)
            }} variant="outline-light"><img src={orderBtn} alt=""/></Button>
        </Card></Col>
    </Row>);
});

export default BasketPage;