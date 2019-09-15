import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Login" />} />
        <Route path="/Login" component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/Register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
