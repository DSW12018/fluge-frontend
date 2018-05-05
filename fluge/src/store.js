import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};

const enhancers = [];

const middleware = [
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const configureStore = () => createStore(rootReducer, initialState, composedEnhancers);


export default configureStore;
