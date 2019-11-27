import React from 'react';
import './styles.css';
import greenLogo from '../../assets/logos/greenLogo.svg';
import SideBar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container as ContainerFluid, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} >
        <div className="container-logo">
          <img src={greenLogo} alt="Logo Conta Simples" className="logo"/>
        </div>
        <Link to="/home">
          <Button variant="secondary" size="lg" block className="botao">
          <span className="icon-sidebar"><FontAwesomeIcon
          icon="home"
          /></span>
          Home
          </Button>
        </Link>
        <Link to="/extratos">
          <Button variant="secondary" size="lg" active block  className="botao">
            <span className="icon-sidebar">
              <FontAwesomeIcon
                icon="file-invoice-dollar"
              />
            </span>
            Extratos
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary" size="lg" block  className="botao botao-sair">
            <span className="icon-sidebar"><FontAwesomeIcon
            icon="sign-out-alt"
            /></span>
            Sair
          </Button>
        </Link>
      </SideBar>
      <ContainerFluid id="page-wrap" fluid="true">
        <Row className="content-all">
          <Col lg={12}>
            <div className="titleCard">
              <h2>Extratos</h2>
            </div>
            <div>
              <table className="table-extrato">
                <thead>
                  <tr class="headerTable">
                    <th>Data</th>
                    <th>Loja</th>
                    <th>Preço</th>
                    <th>Pagamento</th>
                  </tr>
                </thead>
                <tbody id="bodyTable">
                  <tr>
                    <th>29/03/2019</th>
                    <th>Açai da barra</th>
                    <th>R$321,00</th>
                    <th>Cartão</th>
                  </tr>
                  <tr>
                    <th>19/06/2019</th>
                    <th>Gabriel acessórios</th>
                    <th>R$156,00</th>
                    <th>Online</th>
                  </tr>
                  <tr>
                    <th>31/02/2019</th>
                    <th>Netshoes</th>
                    <th>R$15,00</th>
                    <th>Online</th>
                  </tr>
                  <tr>
                    <th>12/08/2019</th>
                    <th>Dirceu joias</th>
                    <th>R$182,00</th>
                    <th>Cartão</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
}

export default App;
