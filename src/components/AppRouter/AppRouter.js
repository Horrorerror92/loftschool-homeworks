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
import {Route, Link, Switch} from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import style from './AppRouter.module.css';
import classnames from 'classnames';

class AppRouter extends Component {
  render() {
    return (
      <div className = {style.wrapper}>
        <div className = {style.container}>
          <nav className = {style.nav}>
            <ul className = {classnames(style.navList, 't-nav-list')}>
              <li className = {style.navElement}>
                <Link to="/app" className={classnames(style.link, 't-link-home')}>
                    Home
                </Link>
              </li>
              <li className = {style.navElement}>
                <Link to="/app/inbox" className={classnames(style.link, 't-link-inbox')}>
                    Inbox
                </Link>
              </li>
              <li className = {style.navElement}>
                <Link to="/app/outbox" className={classnames(style.link, 't-link-outbox')}>
                    Outbox
                </Link>
              </li>
            </ul>
          </nav>
          <div className = {style.content}>
            <Switch>
              <Route exact path = "/app" component = { Home } />
              <Route exact path = "/app/inbox" component = { InboxList } />
              <Route path = "/app/inbox/:id" component = { InboxMail } />
              <Route exact path = "/app/outbox" component = { OutboxList }/>
              <Route path = "/app/outbox/:id" component = { OutboxMail } />
            </Switch>   
          </div>
        </div>
      </div>
    )
  }
}
export default AppRouter;