import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import wpp_icon from "../assets/wpp_icon.webp"
import tg_icon from "../assets/tg_icon.png"
import phone_icon from "../assets/phone_icon.png"
import mail_icon from "../assets/mail_icon.png"

const ContactPage = () => {
    return (<div>
        <Row className="g-0 justify-content-center">
            <Card className="align-self-center" style={{marginTop: 10, marginBottom: 10, width: 500}}><h2
                className="align-self-center">Контактные данные</h2></Card></Row>
        <Row className="g-0 justify-content-center">
            <Col md={2} style={{marginRight: 80}} className="justify-content-center"><Card
                style={{width: 350, height: 600}}><Row className="justify-content-center"><img
                className="align-self-center" src={wpp_icon} style={{height: 180, width: 180}}
                alt=""/></Row><Row><h1 className="text-center">Напишите нам</h1></Row><Row><h2 className="text-center"
                                                                                               style={{padding: 30}}>В
                нашем WhatsApp чате помогут разобраться с вашим вопросом</h2></Row><Row><a
                href="https://wa.me/79992151627" className="text-center"
                style={{fontSize: 40, textDecoration: "none"}}>WhatsApp</a></Row></Card></Col>
            <Col md={2} style={{marginRight: 80}}><Card style={{width: 350, height: 600}}><Row
                className="justify-content-center"><img src={mail_icon}
                                                        className="align-self-center"
                                                        style={{
                                                            height: 180, width: 200
                                                        }}
                                                        alt=""/></Row>
                <Row><h1 className="text-center">Напишите нам</h1></Row><Row><h2 style={{padding: 30}}
                                                                                 className="text-center">Идеи?
                    Предложения? Мы открыты для любых вопросов!</h2></Row><Row><h2 className="text-center">Написать
                    на <a style={{textDecoration: "none"}} href="mailto:lokki0900@mail.ru">lokki0900@mail.ru</a></h2>
                </Row></Card></Col>
            <Col md={2} style={{marginRight: 80}}><Card style={{width: 350, height: 600}}><Row
                className="justify-content-center"><img src={phone_icon}
                                                        className="align-self-center"
                                                        style={{
                                                            height: 180, width: 230
                                                        }}
                                                        alt=""/></Row><Row><h1 className="text-center">Позвоните
                нам</h1></Row><Row><h2 className="text-center" style={{padding: 30}}>Есть вопросы? Мы поможем!</h2>
            </Row><Row><a
                className="text-center" href="tel:+79992151627" style={{fontSize: 35, textDecoration: "none"}}>+7 (999)
                2151627</a></Row></Card></Col>
            <Col md={2}><Card style={{width: 350, height: 600}}><Row className="justify-content-center"><img
                src={tg_icon} className="align-self-center"
                style={{height: 180, width: 190}}
                alt=""/></Row><Row><h1 className="text-center">Напишите нам</h1></Row><Row><h2 className="text-center"
                                                                                               style={{padding: 30}}>В
                нашем telegram чате помогут разобраться с вашим вопросом</h2></Row><Row><a
                href="https://t.me/executable7" className="text-center"
                style={{fontSize: 35, textDecoration: "none"}}>Телеграм</a></Row></Card></Col>
        </Row>
    </div>);
};

export default ContactPage;