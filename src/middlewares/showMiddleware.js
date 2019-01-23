// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import {show} from '../api.js';
import { showRequest, showSuccess, showFailure} from '../actions.js';

export default store=>next=>action=>{
  if(action.type === showRequest.toString()){
      show(action.payload).then((response)=>{
          store.dispatch(showSuccess(response));
      })
      .catch(error=>{
          store.dispatch(showFailure(error));
      })
  } else {
      return next(action);
  }
}