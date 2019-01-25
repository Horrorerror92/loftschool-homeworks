import { searchRequest, searchSuccess, searchFailure} from '../actions';

const initialState = {
  result: [],
  isFetching: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchRequest.toString(): 
      return {...state, result:[], isFetching: true};
    case searchSuccess.toString(): 
      return {...state, result:action.payload, isFetching: false};
    case searchFailure.toString(): 
      return {...state, error:action.payload, isFetching: false};
    default: 
      return state;
  }
}