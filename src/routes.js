import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Extratos from './pages/Extratos'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/extratos" component={Extratos}/>
      </Switch>
    </BrowserRouter>
  );
};
