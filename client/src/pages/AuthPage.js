import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {REG_ROUTE} from "../utils/const";
import {login} from "../store/UserStore";
import {useDispatch} from "react-redux";

const AuthPage = () => {
    const dispatch = useDispatch()
    const loginUser = () => {
        dispatch(login())
    }
    return (<div id="page">
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 123}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Вход</h2>
                <Form className="d-flex flex-column">
                    <h5 className="mt-5">E-mail</h5>
                    <Form.Control id="log_email" className="mb-4" placeholder="Введите ваш e-mail...."
                                  type="email"></Form.Control>
                    <div id="log_err_msg" style={{color: "red"}}></div>
                    <h5 className="mt-4">Пароль</h5>
                    <Form.Control id="log_pass" className="mb-4" placeholder="Введите ваш пароль...."
                                  type="password"></Form.Control>
                    <a href="" className="align-self-lg-end"
                       style={{fontSize: 17, color: "black", textDecoration: "none"}}>Забыли пароль?</a>
                    <Button className="w-20 align-self-center" variant="secondary" color="gray"
                            onClick={loginUser}>Вход</Button>
                    <a href={REG_ROUTE} className="align-self-center mt-3 mb-3"
                       style={{fontSize: 17, color: "black", textDecoration: "none"}}>У меня нету аккаунта</a>
                </Form>
            </Card>
        </Container>
    </div>);
};

export default AuthPage;