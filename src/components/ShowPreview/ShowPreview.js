// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { Component } from 'react';
import style from './ShowPreview.module.css'
import { Link } from 'react-router-dom';
import ShowPage from '../ShowPage';

class ShowPreview extends Component {
  render() {

    const { id, image, name, summary, match} = this.props;
    return (

      <div className = {`t-preview ${style.container}`}>
        <div>
          <Link
            to = {`${match.url}shows/${id}`}
            className = {`t-link`}
            match = {match}
            >
            {name}
          </Link>         
          { image && <img alt = {name} src = {image.medium} /> }
        </div>
        <div dangerouslySetInnerHTML = {{__html: summary}} />
      </div>
    )
  }
}

export default ShowPreview;



