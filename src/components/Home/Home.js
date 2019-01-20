// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import style from './Home.module.css';


class Home extends Component {
  render() {
    return (
        <>
          <h3 className = {style.title}>Home</h3>
          <div className = {style.container}>
            <p className = "t-greeting"> Приветствуем в почтовом клиенте!</p>
          </div>
        </>
    )
  }
}

export default Home;