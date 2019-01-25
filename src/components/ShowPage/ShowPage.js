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
    const {shows: {showResult, isFetching}} = this.props;

    console.log(this.props)
     
    if(isFetching) { 
      return <p>Выполняется поиск</p>;
    }
   

    return (
      <div>
        <p>{showResult.name}</p>
        { showResult.image && <img alt = {showResult.name} src = {showResult.image.medium} />}
        <div dangerouslySetInnerHTML = {{__html:showResult.summary}} />
        <div className = {style.cast}>
        {showResult._embedded && showResult._embedded.cast.map(actor => (
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