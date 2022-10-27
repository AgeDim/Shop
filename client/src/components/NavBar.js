import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE} from "../utils/const";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>РЫБКА ПИТЕРСКАЯ</NavLink>
            {user.isAuth ?
                user.isAdmin ?
                    <Nav className="ml-auto">
                        <Nav.Link href={ADMIN_ROUTE}>Админ панель</Nav.Link>
                        <Nav.Link href={LOGIN_ROUTE}>Выйти</Nav.Link>
                        {/*ССЫЛКА НА ВЫЙТИ ДОЛЖНА БЫТЬ ДРУГАЯ*/}
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href={SHOP_ROUTE}>Каталог</Nav.Link>
                        <Nav.Link href={LOGIN_ROUTE}>Выйти</Nav.Link>
                        {/*ССЫЛКА НА ВЫЙТИ ДОЛЖНА БЫТЬ ДРУГАЯ*/}
                    </Nav>
                :
                <Nav className="ml-auto">
                    <Nav.Link href={SHOP_ROUTE}>Каталог</Nav.Link>
                    <Nav.Link href={LOGIN_ROUTE}>Войти</Nav.Link>
                    <Nav.Link href={REG_ROUTE}>Регистрицая</Nav.Link>
                </Nav>
            }
        </Navbar>

    );
};

export default NavBar;