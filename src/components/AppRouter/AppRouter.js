// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React, {Component} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import style from './AppRouter.module.css';

class AppRouter extends Component {
  render() {
    return (
      <div className = {style.wrapper}>
        <div className = {style.container}>
          
        </div>
      </div>
    )
  }
}
export default AppRouter;