
// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './RoversViewer.module.css';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { Rovers, changeSol, fetchPhotosRequest, getSol, getPhotos} from '../../modules/RoverPhotos'

class RoversViewer extends Component {
  constructor (props) {
    super(props)
    this.rovers = Rovers();
}

componentDidMount() {
  this.photoRequest();
}

componentDidUpdate(prevProps) {
  const { sol } = this.props;

  if (sol.current !== prevProps.sol.current) {
    this.photoRequest();
  }
}

photoRequest = () => {
  const { sol, fetchPhotosRequest } = this.props;

  this.rovers.forEach(rover => fetchPhotosRequest({
    name: rover,
    sol: sol.current
  }))
}
  render() {
    console.log(this.props);
    return (
      <div></div>
    )
  }
}
const mapStateToProps = state => ({
  sol: getSol(state),
  photos: getPhotos(state)
});

const mapDispatchToProps = { changeSol, fetchPhotosRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoversViewer);