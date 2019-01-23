import { showRequest, showSuccess, showFailure} from '../actions';

const initialState = {
  result: [],
  isFetching: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case showRequest.toString(): 
      return {...state, result:[], isFetching: true};
    case showSuccess.toString(): 
      return {...state, result:action.payload, isFetching: false};
    case showFailure.toString(): 
      return {...state, error:action.payload, isFetching: false};
    default: 
      return state;
  }
}