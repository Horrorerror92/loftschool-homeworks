// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './MailList.module.css';
import classnames from 'classnames';

class MailList extends Component {
  renderLinkEmail = () => {
      const { type, emails } = this.props;
      return emails.map(email => (
          <Link to={`/app/${type}/${email.id}`} key={email.id} className={style.link}>
              {`${email.body.substr(0, 50)}...`}
          </Link>
      ));
  };
  render() {
      const { type } = this.props;
      return (
          <div className={classnames(style.container, `t-${type}-list`)}>
              {this.renderLinkEmail()}
          </div>
      );
  }
}

export default MailList;