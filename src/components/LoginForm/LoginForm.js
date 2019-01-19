// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import style from './LoginForm.module.css';
import { withAuth } from '../../context/Auth'

class LoginForm extends Component {
  render() {
    return (
      <div className = {style.bg}>
        <div className = {style.form}>
          
        </div>

      </div>
    )
  }
}

export default withAuth (LoginForm);

