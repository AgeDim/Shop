import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import left from "../assets/left.png"
import right from "../assets/right.png"
import "./css/counter.css"

const Counter = ({product}) => {
    const [counter, setCounter] = useState(1);
    //increase counter
    const increase = () => {
        if (counter < 99) {
            setCounter(count => count + 1);
        }
    };

    //decrease counter
    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
        }
    };
    return (

        <div className="counter" id="counter_div">
            <Row>
                <Col md={3} style={{padding: 0, width: 30, height: 55}}>
                    <button className="control__btn"
                            onClick={decrease}><Image src={left}></Image></button>
                </Col>
                <Col style={{padding: 0, width: 40, marginLeft: 5, marginBottom: 3, height: 43, fontSize: 35}} md={1}
                     className="align-self-center">
                    <span className="d-flex justify-content-center">{counter}</span>
                </Col>
                <Col style={{padding: 0, width: 30, height: 55}} md={1}>
                    <button className="control__btn_1"><Image
                        src={right} onClick={increase}></Image></button>
                </Col>
                <Col><h3>Итог:{product.price * counter} РУБ </h3></Col>
            </Row>

        </div>);
};

export default Counter;