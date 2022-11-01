import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import left from "../assets/left.png"
import right from "../assets/right.png"

const Counter = ({product}) => {
    const [counter, setCounter] = useState(1);
    console.log(product.price)
    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
        }
    };
    return (

        <div className="counter" style={{borderColor: "black", width: 500}}>
            <Row>
                <Col md={3} style={{padding: 0, width: 30}}>
                    <button className="control__btn" style={{padding: 0, borderRadius: "75% 0% 0% 75%"}}
                            onClick={decrease}><Image src={left}></Image></button>
                </Col>
                <Col md={1} style={{padding: 0, width: 20, marginLeft: 14}} className="align-self-center">
                    <span className="counter__output">{counter}</span>
                </Col>
                <Col md={1} style={{padding: 0, width: 30}}>
                    <button className="control__btn" style={{padding: 0, borderRadius: "0% 75% 75% 0%"}}><Image
                        src={right} onClick={increase}></Image></button>
                </Col>
                <Col><h3>Итог:{product.price * counter} РУБ </h3></Col>
            </Row>

        </div>
    );
};

export default Counter;