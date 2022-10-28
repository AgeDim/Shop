import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {REG_ROUTE} from "../utils/const";
import bg from "../assets/BG.png"
const Auth = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 123}}>
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">Вход</h2>
                <Form className="d-flex flex-column">
                    <h5 className="mt-5">E-mail</h5>
                    <Form.Control className="mb-5" placeholder="Введите ваш e-mail...." type="email"></Form.Control>
                    <h5>Пароль</h5>
                    <Form.Control className="mb-1" placeholder="Введите ваш пароль...." type="password"></Form.Control>
                    <a href="" className="align-self-lg-end" style={{fontSize:13, color: "black", textDecoration:"none"}}>Забыли пароль?</a>
                    <Button className="w-20 align-self-center" variant="secondary" color="gray">Вход</Button>
                    <a href={REG_ROUTE} className="align-self-center mt-3 mb-3" style={{fontSize:13, color: "black", textDecoration:"none"}}>У меня нету аккаунта</a>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;