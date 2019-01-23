// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import style from './Search.module.css';
import { searchRequest } from  '../../actions';
import { connect } from 'react-redux';
import ShowPreview from '../ShowPreview';

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
    const { result, isFetching, error} = this.props;

    if(isFetching) { 
      return <p>Выполняется поиск</p>;
    }
    if(error) {
      return <p> Ошибка </p>;
    }
    
    return (

      <>
        <div className = { style.previewList}>
          <input
          className = {style.input}
          onChange = {this.handleChange}
          placeholder = 'Название сериала'
          value = { searchValue } 
          />
          <div className = {style.buttonWrapper}>
            <button className = {style.button} onClick = {this.handleClick}>Найти</button>
          </div>
        </div>
        <div className = {style.searchPanel}>
          {result ? 
            result.map(index => (
            <ShowPreview 
              key = { index.id }
              image = { index.image }
              name = { index.name }
              id = { index.id }
              summary = { index.summary} />
            )) : 
            null
            }
        </div>      
      </>

    )
  } 
}

const mapStateToProps = state => state;
const mapDispatchToProps = { searchRequest }
export default connect (mapStateToProps, mapDispatchToProps)(Search);