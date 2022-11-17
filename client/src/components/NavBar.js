import React, {useContext} from 'react';
import {Button, Col, Nav, Navbar, NavItem, Row} from "react-bootstrap";
import {
    BASKET_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, LOGIN_ROUTE, SHOP_ROUTE
} from "../utils/const";
import {NavLink} from "react-router-dom";
import NavbarImg from "../assets/NavBarImg.webp"
import {Context} from "../index";

const NavBar = () => {
    const {user} = useContext(Context)

    return (<Navbar bg="light" id="nav_bar" className="d-flex justify-content-lg-center">
            <NavLink to={SHOP_ROUTE} className='me-auto' style={{margin: 10}}><img className='NavbarImg'
                                                                                   src={NavbarImg}
                                                                                   alt="example"/></NavLink>
            <Nav className="justify-content-lg-center me-auto">
                <NavItem><Nav.Link href={SHOP_ROUTE}>Магазин</Nav.Link></NavItem>
                <NavItem><Nav.Link href={DELIVERY_ROUTE}>Доставка</Nav.Link></NavItem>
                <NavItem><Nav.Link href={BASKET_ROUTE}>Мои заказы</Nav.Link></NavItem>
                <NavItem><Nav.Link href={CONTACTS_ROUTE}>Контакты</Nav.Link></NavItem>
            </Nav>
            <Nav className="flex-column me-3">
                {user.isAuth ? null :
                    <a href={LOGIN_ROUTE}><Button variant="secondary" style={{marginRight: 15, width: 80}}>Вход</Button></a>}

                <Row>
                    <Col><a href="" style={{fontSize: 12, color: "black", textDecoration: "none"}}>РУС</a></Col>
                    <Col><h5>/</h5></Col>
                    <Col><a href="" className="me-2"
                            style={{fontSize: 12, color: "black", textDecoration: "none"}}>ENG</a></Col>
                    {/*Добавить ссылки на русскую и английскую версию сайта*/}
                </Row>
            </Nav>

        </Navbar>

    );
};

export default NavBar;