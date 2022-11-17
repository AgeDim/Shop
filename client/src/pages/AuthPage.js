import React, {useContext} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {REG_ROUTE, SHOP_ROUTE} from "../utils/const";
import validator from "validator/es";
import {sha512} from "crypto-hash";
import {getSalt} from "../Salt";
import axios from "../axiosAPI";
import {Context} from "../index";


const AuthPage = () => {
    const {user} = useContext(Context)
    const login = async () => {
        if (!validator.isEmail(document.getElementById("log_email").value)) {
            document.getElementById("log_err_msg").textContent = 'Uncorrect email!'
        } else if (document.getElementById("log_pass").value === "") {
            document.getElementById("log_err_msg").textContent = 'Password couldn\'t be empty!'
        } else {
            let result = await sha512(document.getElementById("log_pass").value)
            result += getSalt()
            console.log(result)
            axios.post("/login", {
                email: document.getElementById("log_email").value, password: result,
            }).then(res => {
                if (res.status === 200) {
                    user.setUser({
                        username: res.data.username,
                        email: document.getElementById("log_email").value,
                        password: result
                    })
                    user.setIsAuth(true)
                    console.log(user)
                    window.location.href = SHOP_ROUTE
                } else {
                    document.getElementById("log_err_msg").textContent = 'Wrong email or password!'
                }
            }).catch((e) => {
                document.getElementById("log_err_msg").textContent = e.response.data
            })
        }
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
                            onClick={login}>Вход</Button>
                    <a href={REG_ROUTE} className="align-self-center mt-3 mb-3"
                       style={{fontSize: 17, color: "black", textDecoration: "none"}}>У меня нету аккаунта</a>
                </Form>
            </Card>
        </Container>
    </div>);
};

export default AuthPage;