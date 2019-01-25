// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component } from 'react';
import style from  './ShowPage.module.css';
import { connect } from 'react-redux';
import { showRequest } from '../../actions';


class ShowPage extends Component {
  componentDidMount() {
    const {showRequest, match} = this.props;
    showRequest(match.params.id);
  }

  render(){
    const {result, isFetching, error} = this.props;
    if(isFetching) { 
      return <p>Выполняется поиск</p>;
    }
    if(error) {
      return <p> Ошибка </p>;
    }

    return (
      <div>
        <p>{result.name}</p>
        { result.image && <img alt = {result.name} src = {result.image.medium} />}
        <div dangerouslySetInnerHTML = {{__html:result.summary}} />
        <div className = {style.cast}>
        {result._embedded && result._embedded.cast.map(actor => (
          <div className = {`t-person`} key={actor.person.id}>
            <p>{actor.person.name}</p>
            {actor.person.image && <img src={actor.person.image.medium} alt={actor.person.name} />}
          </div>
          ))
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { showRequest };
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);