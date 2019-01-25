import { showRequest, showSuccess, showFailure} from '../actions';

const initialState = {
  showResult: [],
  isFetching: false,
  
}

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    
    case showRequest.toString(): 
      return {...state, showResult:[], isFetching: true};
    case showSuccess.toString(): 
      return {...state, showResult:action.payload, isFetching: false};
    case showFailure.toString(): 
      return {...state, isFetching: false};
    default: 
      return state;
  }
}