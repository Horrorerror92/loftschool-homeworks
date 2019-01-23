// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import { search } from '../api.js';
import { searchRequest, searchSuccess, searchFailure } from '../actions.js';

export default store=>next=>action=>{
  if (action.type === searchRequest.toString()){
      search(action.payload).then((response)=>{
          store.dispatch(searchSuccess(response));
      })
      .catch(error=>{
          store.dispatch(searchFailure(error));
      })
  } else {
      return next(action);
  }
}
