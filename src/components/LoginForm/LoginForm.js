// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react';
import style from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value 
    });
  }

  handleFormclick = (e) => {
    e.preventDefault();
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password); 
  }

  render() {

    const { isAuthorized, authError} = this.props;
    const {email, password} = this.state;

    return isAuthorized
      ? (<Redirect to = "/app" />)
      : (

        <div className = {style.bg}>
          <div className = {classnames(style.form, 't-form')}>
            <p>
              <label htmlFor = {style.labelText}>
                <span className = {style.labelText}> Почта </span>
              </label>
              <input
                type = "text"
                name = "email"
                className = {classnames(style.input, 't-input-email')}
                value = {email}
                onChange = {this.handleChange}
               />
            </p>
            <p>
              <label htmlFor = {style.labelText}>
                <span className = {style.labelText}> Пароль </span>
              </label>
              <input
                type = "password"
                name = "password"
                className = {classnames(style.input, 't-input-password')}
                value = {password}
                onChange = {this.handleChange}
               />
            </p>
                    
            {authError === '' || <p className={style.error}>{authError}</p>}
            
            <div className = {style.buttons}>
              <button
                className = {classnames(style.button, 't-login')}
                onClick = {this.handleFormclick}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
        )
  }
}

export default withAuth (LoginForm);

