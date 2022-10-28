import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {Checkbox} from "@nextui-org/react";
import reg from "../assets/active.png"

const RegPage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 200}}>
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">Вход</h2>
                <Form className="d-flex flex-column">
                    <h5 className="mt-1">Имя</h5>
                    <Form.Control className="mb-3" placeholder="Введите ваше имя..." type="email"></Form.Control>
                    <h5 className="mt-0">E-mail</h5>
                    <Form.Control className="mb-3" placeholder="Введите ваш e-mail..." type="email"></Form.Control>
                    <h5>Придумайте пароль</h5>
                    <Form.Control className="mb-3" placeholder="Введите ваш пароль..." type="password"></Form.Control>
                    <h5>Повторите пароль</h5>
                    <Form.Control className="mb-3" placeholder="Повторите ваш пароль..." type="password"></Form.Control>
                    <Checkbox><h6>Я согласен с <a href="https://www.securitycode.ru/personal-data/"
                                                  style={{color: "lightblue"}}>политикой обработки персональных
                        данных</a></h6></Checkbox>
                    <Button style={{background: "rgba(0, 0, 0, 0)", borderColor:"rgba(0, 0, 0, 0)"}}><img src={reg}/></Button>
                </Form>
            </Card>
        </Container>
    );
};

export default RegPage;