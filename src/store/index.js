import { createStore, combineReducers } from 'redux';
import registerReducer from '../reducers';

const rootReducer = combineReducers({
  registerReducer,
});

const extension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, extension);

export default store;
