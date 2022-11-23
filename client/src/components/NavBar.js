import React, {useContext, useEffect} from 'react';
import {Button, Col, Container, Image, Nav, Navbar, NavItem, Row} from "react-bootstrap";
import {
    BASKET_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, SHOP_ROUTE
} from "../utils/const";
import {NavLink, useHistory} from "react-router-dom";
import NavbarImg from "../assets/NavBarImg.webp"
import {Context} from "../index";
import {BsFillCartFill} from "react-icons/bs"
import {observer} from "mobx-react-lite";
import {Badge} from "@nextui-org/react";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const {basket} = useContext(Context)

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (<Navbar bg="light" variant="light">
            <NavLink style={{color: 'white', marginLeft: 7}} to={SHOP_ROUTE}><Image src={NavbarImg}/></NavLink>
            <Nav className="justify-content-center me-auto" style={{marginLeft: 15}}>
                <NavItem><Button variant="secondary" onClick={() => {
                    history.push(SHOP_ROUTE)
                }} style={{marginRight: 10}}>Магазин</Button></NavItem>
                <NavItem><Button variant="secondary" style={{marginRight: 10}} onClick={() => {
                    history.push(DELIVERY_ROUTE)
                }}>Доставка</Button></NavItem>
                <NavItem><Button variant="secondary" style={{marginRight: 10}}
                                 onClick={() => history.push(ORDER_ROUTE)}>Мои заказы</Button></NavItem>
                <NavItem><Button variant="secondary" onClick={() => {
                    history.push(CONTACTS_ROUTE)
                }}>Контакты</Button></NavItem>
            </Nav>
            <Nav className="flex-column me-3">
                {!user.isAuth &&
                    <Button variant="secondary" onClick={() => {
                        history.push(LOGIN_ROUTE)
                    }}
                            style={{width: 80}}>Вход</Button>}
                {user.isAuth && <div><Badge size="md" content={basket.prod.length} color="error"><BsFillCartFill
                    size={45} onClick={() => {
                    history.push(BASKET_ROUTE)
                }} style={{cursor: "pointer"}}/></Badge><Button variant="secondary" style={{marginLeft: 10}}
                                                                onClick={() => {
                                                                    logout()
                                                                }}>Выход</Button></div>}
            </Nav>
        </Navbar>
    );
});

export default NavBar;