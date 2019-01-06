import React from 'react'
//import bond from './assets/bond_approve.jpg';
import './Form.css';
 
 class Form extends React.Component {

  state =  {
    firstName: '',
    lastName: '',
    password: '',
    valid: false  
  }

   render(){
    
      return (
        
        <div className="app-container">
        <form className="message-list"> 
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstName">
              <span className="field-label">Имя</span>
            </label>
            <input className="field__input field-input t-input-firstname"  type="text" name="firstName" ></input>
            <span className="field__error field-error t-error-firstname"></span>
          </p>     
          <p className="field">
            <label className="field__label" htmlFor="lastName">
              <span className="field-label">Фамилия</span>
            </label>
            <input className="field__input field-input t-input-lastname"  type="text" name="lastName" ></input>
            <span className="field__error field-error t-error-lastname"></span>
          </p>     
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input className="field__input field-input t-input-password"  type="text" name="password" ></input>
            <span className="field__error field-error t-error-password"></span>
          </p>     
            
          <div className="form__buttons">
            <input 
            type="submit"
            className="button t-submit"                        
            value="Проверить" 
            />   
          </div>                    
        </form>        
      </div>     
             
      )
      
  }
}
 export default Form;