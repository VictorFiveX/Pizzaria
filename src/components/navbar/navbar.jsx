import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './style.scss';


export default function NavBar() {
    return (
        <>
          <Nav className="justify-content-center flex flex-col">
        <Nav.Item >
          <Nav.Link href="#pizza">Pizzas</Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="#pizza">Esfihas</Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="#pizza">Beirutes</Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="#pizza">Pasteis</Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="#pizza">Pacotes</Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="#pizza">Bebidas</Nav.Link>
        </Nav.Item >
        
      </Nav>
        </>
        
      );
    }
    


