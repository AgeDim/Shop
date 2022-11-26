import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {REG_ROUTE, SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {login} from "../http/userAPI";


const AuthPage = observer(() => {
    const {user, basket, orders} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            const user1 = {email:email, password:password}
            user.setUser(user1)
            user.setIsAuth(true)
            basket.setUserEmail(email)
            orders.setUserEmail(email)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 123}}>
            <Card style={{width: 600, paddingTop: 100}} className="p-5">
                <h2 className="m-auto">Вход</h2>
                <Form className="d-flex flex-column">
                    <h5 className="mt-5">E-mail</h5>
                    <Form.Control id="log_email" className="mb-4" placeholder="Введите ваш e-mail...."
                                  type="email" onChange={e => setEmail(e.target.value)}></Form.Control>
                    <div id="log_err_msg" style={{color: "red"}}></div>
                    <h5 className="mt-4">Пароль</h5>
                    <Form.Control id="log_pass" className="mb-4" placeholder="Введите ваш пароль...."
                                  type="password" onChange={e => setPassword(e.target.value)}></Form.Control>
                    <a onClick={() => {
                        history.push(SHOP_ROUTE)
                    }} className="align-self-lg-end"
                       style={{fontSize: 17, color: "black", textDecoration: "none", cursor: "pointer"}}>Забыли
                        пароль?</a>
                    <Button className="w-20 align-self-center" variant="secondary" color="gray"
                            onClick={() => {
                                click()
                            }}>Вход</Button>
                    <a onClick={() => {
                        history.push(REG_ROUTE)
                    }} className="align-self-center mt-3 mb-3"
                       style={{fontSize: 17, color: "black", textDecoration: "none", cursor: "pointer"}}>У меня нету
                        аккаунта</a>
                </Form>
            </Card>
        </Container>);
});

export default AuthPage;