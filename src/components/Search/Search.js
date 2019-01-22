// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import style from './Search.module.css';
import { searchRequest } from  '../../actions';


class Search extends Component {

  state = {
    searchValue: ''
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleClick = (e) => {
    e.preventdefault();
    const { searchValue } = this.state;
    const { searchRequest } = this.props;
    
    searchRequest(searchValue);

    this.setState({
      searchValue: ''
    })

  }

  render(){
    
    const searchValue = this.state;

    return (
      <>
        <div className = { style.previewList}>
          <input
          className = {style.input}
          onChange = {this.handleChange}
          placeholder = 'Название сериала'
          value = { searchValue } 
          />
        </div>
        <div className = {style.buttonWrapper}>
          <button className = {style.button} onClick = {this.handleClick}>Найти</button>
        </div>
      </>
    )
  } 
}

export default Search;