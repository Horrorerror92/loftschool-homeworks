// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина


import React, { Component } from 'react';
import Login from '../Login';
import Search from '../Search';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import  PrivateRoute from '../PrivateRoute';

class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Login } />
          <PrivateRoute exact path = '/search' component = { Search } />
          <Redirect to = '/' />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default Router
