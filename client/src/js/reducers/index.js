import { ADD_ARTICLE, GET_ARTICLES, SAVE_ARTICLE, REMOVE_SAVED_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  savedArticles: []
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
        articles: action.payload
      });
    case SAVE_ARTICLE:
      return Object.assign({}, state, {
        savedArticles: action.payload
      })
    case REMOVE_SAVED_ARTICLE:
      return Object.assign({}, state, {
        savedArticles: action.payload
      })
    default:
      return state;
  }
}

export default rootReducer;