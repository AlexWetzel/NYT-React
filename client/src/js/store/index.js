import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { formatArticles } from '../middleware/formatArticles';

const middleware = [thunk, formatArticles];

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;