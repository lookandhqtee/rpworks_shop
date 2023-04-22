import React, {useContext} from 'react';
import { Context } from '../index';
import { Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import {SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts"
import {observer} from "mobx-react-lite"
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
  return (
     <Navbar bg = "dark" variant="dark">  
      <Container>
        <NavLink style = {{color: 'white'}} href = {SHOP_ROUTE}>Ремонтные услуги</NavLink>
          {user.isAuth ?
             <Nav className = "ml-auto" style = {{color: 'white'}}>
                <Button
                  variant = {"outline-light"} 
                  onClick = {() => navigate(ADMIN_ROUTE)}
                  >
                  Панель Администратора
                </Button>
                <Button variant = {"outline-light"}  className = "mr-4" onClick={() => navigate(LOGIN_ROUTE)} > Вход</Button>
                
            </Nav>
          :
          <Nav className = "mr-4" style = {{color: 'white'}}>
          <Button variant = {"outline-light"} onClick={() => user.setIsAuth(true)} >Авторизация</Button>
          </Nav>
      }
      </Container>
    </Navbar>
  );  
});

export default NavBar;
