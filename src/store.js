import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducers';
import showMiddlewares from 'middlewares/showMiddleware';
import searchMiddlewares from 'middlewares/searchMiddleware';

export default  (initialState) => createStore(reducer,initialState,
    compose(
        applyMiddleware(searchMiddlewares,showMiddlewares),
        window.devToolsExtension
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
        )
    );