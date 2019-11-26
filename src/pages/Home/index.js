import React from 'react';
import './styles.css';
import SideBar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Button, Container as ContainerFluid, Row, Col } from 'react-bootstrap';
import greenLogo from '../../assets/logos/greenLogo.svg';
import defaultProfile from '../../assets/images/defaultProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} >
        <div className="container-logo">
          <img src={greenLogo} alt="Logo Conta Simples" className="logo"/>
        </div>
        <Link to="/home">
          <Button variant="secondary" size="lg" active block className="botao">
          <span className="icon-sidebar"><FontAwesomeIcon
          icon="home"
          /></span>
          Home
          </Button>
        </Link>
        <Link to="/extratos">
          <Button variant="secondary" size="lg" block  className="botao">
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
        <Row className="content-home">
          <Col lg={6}>
            <div className="titleCard-home">
              <h2>Informações</h2>
            </div>
            <div className="card-home">
              <Row className="infoPhoto-home">
                <Col lg={4}>
                  <img src={defaultProfile}  className="imageProfile-home"/>
                </Col>
                <Col lg={6} className="alignName-home">
                  <h2>
                    Adler Santos Rodrigues
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="info-home">
                  <h3 className="infoTitle-home">
                    Email
                  </h3>
                  <h3 className="infoSubtitle-home">Adlerdet@outlook.com</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="info-home">
                  <h3 className="infoTitle-home">
                    Telefone de Contato
                  </h3>
                  <h3 className="infoSubtitle-home">(15)99718-9839</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="info-home">
                  <h3 className="infoTitle-home">
                    Id
                  </h3>
                  <h3 className="infoSubtitle-home">436472</h3>
                  <div className="lastLogin-home">
                    <small>Último login: 27/11/2019, 20:24</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="titleCard-home">
              <h2>Extratos recentes</h2>
            </div>
            <div className="card-home">
              <Row className="infoPhoto-home">
                <Col lg={12}>
                  <div className="recentTransaction-home">
                    <Row>
                      <Col lg={6}>
                        <p>23/11/2019</p>
                        <p>19:30</p>
                      </Col>
                      <Col lg={6}>
                        <p>Pagamento Online</p>
                        <p>Netshoes, São paulo</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="titleCard-home">
              <h2>Extratos recentes</h2>
            </div>
            <div className="card-home">
              <Row className="infoPhoto-home">
                <Col lg={12}>
                  <div className="recentTransaction-home">
                    <Row>
                      <Col lg={6}>
                        <p>23/11/2019</p>
                        <p>19:30</p>
                      </Col>
                      <Col lg={6}>
                        <p>Pagamento Online</p>
                        <p>Netshoes, São paulo</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
}

export default App;
