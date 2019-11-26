import React from 'react';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import whiteLogo from '../../assets/logos/whiteLogo.svg';
import InputLogin from '../../components/InputLogin'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Container fluid="true">
      <Row>
        <Col lg={6} className="left-col">
          <div className="content-login">
            <img src={whiteLogo} className="logo-login"></img>
          </div>
        </Col>
        <Col lg={6}>
          <div className="content-login">
            <div className="containerForm-login">
              <h2 className="title-login">Seja bem-vindo ao conta simples</h2>
              <h3>Insira os seus dados para acessar a sua conta</h3>
              <InputLogin placeholder="Usuário"/>
              <InputLogin placeholder="Senha"/>
              <Link to="/home">
                <button className="button-login">Entrar</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
