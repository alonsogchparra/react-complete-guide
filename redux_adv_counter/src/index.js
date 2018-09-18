import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerCounter from './store/reducers/counter';
import reducerResult from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: reducerCounter,
  res: reducerResult
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware Dispatching]', action);
      const result = next(action);
      console.log('[Middleware] next stage', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(composeEnhancers(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
