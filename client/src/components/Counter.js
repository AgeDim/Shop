import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import left from "../assets/left.png"
import right from "../assets/right.png"
import "./css/counter.css"
import {observer} from "mobx-react-lite";


const Counter = observer(({product}) => {
    const [counter, setCounter] = useState(1);
    const increase = () => {
        if (counter < 99) {
            setCounter(count => count + 1);
        }
    };

    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
        }
    };

    return (

        <div className="counter" id="counter_div">
            <Row>
                <Col md={3} style={{padding: 0, width: 30, height: 55, paddingTop: 12}}>
                    <button className="control__btn"
                            onClick={decrease}><Image style={{width: 22, height: 25}} src={left}></Image></button>
                </Col>
                <Col style={{padding: 0, width: 40, marginRight: 15, marginBottom: 3, height: 43, fontSize: 35}} md={1}
                     className="justify-content-center">
                    <span id="counterVal" className="d-flex justify-content-center">{counter}</span>
                </Col>
                <Col style={{padding: 0, width: 30, height: 50, paddingTop: 12}} md={1}>
                    <button className="control__btn_1"><Image style={{width: 22, height: 25}}
                                                              src={right} onClick={increase}></Image></button>
                </Col>
                <Col style={{paddingTop: 10}}><h3>Итог:{product.defaultPrice * counter} РУБ </h3></Col>
            </Row>

        </div>);
});

export default Counter;