// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { Component } from 'react';
import './AppRouter.css';
import { Switch, Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from "../ShowPage";

class AppRouter extends Component {
  render() {
    return ( 
      <div className = {`App`}>
        <Switch>
          <Route exact path = '/' component = { Search } />
          <Route path = 'shows/:id' component = { ShowPage }/>
        </Switch>
      </div>
    )
  }
} 

export default AppRouter;