
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filters from './filters';

export default combineReducers({
  filters,
  router: routerReducer
});
