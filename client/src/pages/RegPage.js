import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import reg from "../assets/active.png"
import {LOGIN_ROUTE} from "../utils/const";
import {register} from "../store/UserStore";
import {Context} from "../index";
import validator from "validator/es";
import {sha512} from "crypto-hash";
import {getSalt} from "../Salt";
import axios from "../axiosAPI";


const RegPage = () => {
    const {user} = useContext(Context)
    const register = async () => {
        let checkBox = document.getElementById('reg_check')
        if (!validator.isEmail(document.getElementById("reg_email").value)) {
            document.getElementById("reg_err_msg").textContent = 'Uncorrect email!'
        } else if (document.getElementById("reg_pass").value === '') {
            document.getElementById("reg_err_msg").textContent = "Name can't be empty"
        } else if (document.getElementById("reg_pass").value !== document.getElementById("reg_pass1").value) {
            document.getElementById("reg_err_msg").textContent = "Repeated password incorrectly"
        } else if (!validator.isStrongPassword(document.getElementById("reg_pass").value, {minSymbols: 0})) {
            document.getElementById("reg_err_msg").textContent = "Password must consist of one lowercase, uppercase letter and number, at least 8 characters"
        } else if (!checkBox.checked) {
            document.getElementById("reg_err_msg").textContent = 'You need to accept personal data processing policies!'
        } else {
            let result = await sha512(document.getElementById("reg_pass").value)
            result += getSalt()
            await axios.post('/reg', {
                username: document.getElementById("reg_name").value,
                email: document.getElementById("reg_email").value,
                password: result
            }).then(res => {
                console.log(res)
                if (res.data === true) {
                    const curr = {
                        username: document.getElementById("reg_name").value,
                        email: document.getElementById("reg_email").value,
                        password: result
                    }
                    user.setUser(curr)
                    user.setIsAuth(true)
                    console.log(user)
                }
                if (res.data === "exists") {
                    document.getElementById("reg_err_msg").textContent = "User with this email already exists!"
                }
            })
        }
    }
    return (<Container className="d-flex justify-content-center align-items-center"
                       style={{height: window.innerHeight - 200}}>
        <Card style={{width: 500}} className="p-5">
            <h2 className="m-auto">Регистрация</h2>
            <Form className="d-flex flex-column">
                <h5 className="mt-1">Имя</h5>
                <Form.Control className="mb-3" id="reg_name" placeholder="Введите ваше имя..."
                              type="email"></Form.Control>
                <h5 className="mt-0">E-mail</h5>
                <Form.Control className="mb-3" id="reg_email" placeholder="Введите ваш e-mail..."
                              type="email"></Form.Control>
                <h5>Придумайте пароль</h5>
                <Form.Control className="mb-3" id="reg_pass" placeholder="Введите ваш пароль..."
                              type="password"></Form.Control>
                <h5>Повторите пароль</h5>
                <Form.Control className="mb-3" id="reg_pass1" placeholder="Повторите ваш пароль..."
                              type="password"></Form.Control>
                <div style={{color: "red", fontSize: 20}} id="reg_err_msg"></div>
                <Row><Col md={1}><input id="reg_check" type="checkbox"/></Col><Col><h6>Я согласен с <a
                    href="https://www.securitycode.ru/personal-data/"
                    style={{color: "lightblue"}}>политикой обработки персональных
                    данных</a></h6></Col></Row>
                <Button style={{background: "rgba(0, 0, 0, 0)", borderColor: "rgba(0, 0, 0, 0)"}}
                        onClick={register}><img src={reg} alt={""}/></Button>
                <a href={LOGIN_ROUTE} className="align-self-center mt-3 mb-3"
                   style={{fontSize: 18, color: "black", textDecoration: "none"}}>У меня есть аккаунт</a>
            </Form>
        </Card>
    </Container>);
};

export default RegPage;