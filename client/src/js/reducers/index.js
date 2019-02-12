import { ADD_ARTICLE, GET_ARTICLES } from "../constants/action-types";

const initialState = {
  articles: []
};

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }
//   return state;
// }
function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case GET_ARTICLES:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    default:
      return state;
  }
}

export default rootReducer;