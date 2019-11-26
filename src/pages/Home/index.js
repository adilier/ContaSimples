import React from 'react';
import './styles.css';
import SideBar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import greenLogo from '../../assets/logos/greenLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} >
        <div className="container-logo">
          <img src={greenLogo} className="logo"></img>
        </div>
        <Link to="/home">
          <Button variant="secondary" size="lg" active block className="botao">
            Home
          </Button>
        </Link>
        <Link to="/extratos">
          <Button variant="secondary" size="lg" block  className="botao">
            Extratos
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary" size="lg" block  className="botao botao-sair">
            Sair
          </Button>
        </Link>
      </SideBar>
      <div id="page-wrap">
        <div>
        <FontAwesomeIcon
          icon="bell"
        />
        </div>
      </div>
    </div>
  );
}

export default App;
