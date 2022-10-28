import React, {useContext} from 'react';
import {Context} from "../index";
import {Breadcrumb, Button, Col, Nav, Navbar, NavItem, Row} from "react-bootstrap";
import {
    BASKET_ROUTE,
    CONTACTS_ROUTE,
    DELIVERY_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE, REG_ROUTE,
    SERVICES_ROUTE,
    SHOP_ROUTE
} from "../utils/const";
import {NavLink} from "react-router-dom";
import NavbarImg from "../assets/NavBarImg.webp"

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" className="d-flex justify-content-lg-center">
            <NavLink to={MAIN_ROUTE} className='me-auto' style={{margin: 15}}><img className='NavbarImg'
                                                                                           src={NavbarImg}
                                                                                           alt="example"/></NavLink>
            <Nav className="justify-content-lg-center me-auto" >
                <NavItem><Nav.Link href={MAIN_ROUTE} >Главная</Nav.Link></NavItem>
                <NavItem><Nav.Link href={SERVICES_ROUTE}>Услуги</Nav.Link></NavItem>
                <NavItem><Nav.Link href={SHOP_ROUTE}>Магазин</Nav.Link></NavItem>
                <NavItem><Nav.Link href={DELIVERY_ROUTE}>Доставка и оплата</Nav.Link></NavItem>
                <NavItem><Nav.Link href={BASKET_ROUTE}>Мои заказы</Nav.Link></NavItem>
                <NavItem><Nav.Link href={CONTACTS_ROUTE}>Контакты</Nav.Link></NavItem>
            </Nav>
            <Nav className="flex-column me-3">
                <a href={LOGIN_ROUTE} ><Button variant="secondary" style={{marginRight: 15, width: 80}}>Вход</Button></a>
                <Row>
                    <Col><a href=""  style={{fontSize:12, color: "black", textDecoration:"none"}}>РУС</a></Col>
                    <Col><h5>/</h5></Col>
                    <Col><a href="" className="me-2" style={{fontSize:12, color: "black", textDecoration:"none"}}>ENG</a></Col>
                    {/*Добавить ссылки на русскую и английскую версию сайта*/}
                </Row>
            </Nav>

        </Navbar>

    );
};

export default NavBar;