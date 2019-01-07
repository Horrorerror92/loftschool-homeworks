import React from 'react'
import bond from './assets/bond_approve.jpg';
import './Form.css';

const Data = {
  firstName: {
    value: 'james',
    error: 'Имя указано не верно',
    errorEmpty: 'Нужно указать имя'
  },
  lastName: {
    value: 'bond',
    error: 'Фамилия указана не верно',
    errorEmpty: 'Нужно указать фамилию'
  },
  password: {
    value: '007',
    error: 'Пароль указан не верно',
    errorEmpty: 'Нужно указать пароль'
  }
};

class Form extends React.Component {

  state =  {
    firstName: '',
    lastName: '',
    password: '',
    dataValid: false,
    errors: {}  
  }
  changeInputText = (e) => {
    if (this.state.errors[e.target.name]) {      
      this.setState({
        [e.target.name]: e.target.value,
        errors: {},
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  heandleForm = (e) => {
    e.preventDefault();
    this.formValidate();
  }

  formValidate = () => {
    const errors = {};
    for (const key in Data) {
      if (this.state[key] === '') {
        errors[key] = Data[key].errorEmpty;
      } else if (this.state[key].toLowerCase() !== Data[key].value) {
        errors[key] = Data[key].error;
      }
    }
    this.setState({
      errors,
      dataValid: Object.keys(errors).length === 0
    });
  }

  trueValidImage = () => {
    return <img src={bond} alt="bond approve" className="t-bond-image"></img>
  }

  render(){
    if(!this.state.dataValid) { 
      return (
        <div className="app-container">
        <form className="message-list" onSubmit={this.heandleForm}> 
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstName">
              <span className="field-label">Имя</span>
            </label>
            <input className="field__input field-input t-input-firstname" onChange={this.changeInputText}  type="text" name="firstName" value={this.state.firstName} ></input>
            <span className="field__error field-error t-error-firstname">{this.state.errors.firstName}</span>
          </p>     
          <p className="field">
            <label className="field__label" htmlFor="lastName">
              <span className="field-label">Фамилия</span>
            </label>
            <input className="field__input field-input t-input-lastname" onChange={this.changeInputText} type="text" name="lastName" value={this.state.lastName} ></input>
            <span className="field__error field-error t-error-lastname">{this.state.errors.lastName}</span>
          </p>     
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input className="field__input field-input t-input-password"  onChange={this.changeInputText} type="text" name="password" value={this.state.password} ></input>
            <span className="field__error field-error t-error-password">{this.state.errors.password}</span>
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
    } else {
      return (
        <div className="app-container">
          {this.trueValidImage()}
        </div>       
      )
    } 
  }
}
 export default Form;