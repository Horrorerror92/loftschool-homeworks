
// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом

import { changeSol, fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from './actions'
import { combineReducers } from 'redux';
import { handleActions} from 'redux-actions';
import produce from 'immer';


const sol = handleActions({
  [changeSol]: (_state, action) => ({
    ..._state,
    current: action.payload
  }),
}, 
  { 
    current: 10,
    min: 1,
    max: 100 
  }
)

const photos = handleActions({
  [fetchPhotosRequest]: (state, action) => {
    const { name, sol } = action.payload;

    return produce(state, draft => {
      draft[name][sol] = {
        isLoading: true,
        isLoaded: false,
        photos: []
      }
    })
  },
  [fetchPhotosSuccess]: (state, action) => {
    const { name, sol, photos } = action.payload;

    return produce(state, draft => {
      draft[name][sol] = {
        isLoading: false,
        isLoaded: true,
        photos: photos
      }
    })
  },
  [fetchPhotosFailure]: (state, action) => {
    const { name, sol, error } = action.payload;

    return produce(state, draft => {
      draft[name][sol] = {
        isLoading: false,
        isLoaded: false,
        error: error
      }
      })
  },
},
  {
    curiosity:  {},
    opportunity: {},
    spirit: {}
  }
)


export default combineReducers({
    sol,
    photos,
})

export const getSol = state => state.roverPhotos.sol
export const getPhotos = state => state.roverPhotos.photos;
export const Rovers = ['curiosity', 'opportunity', 'spirit'];

