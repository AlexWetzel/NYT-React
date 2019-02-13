import { GET_ARTICLES, GET_SAVED_ARTICLES, SAVE_ARTICLE, REMOVE_SAVED_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  savedArticles: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, {
        articles: action.payload
      });
    case GET_SAVED_ARTICLES:
      return Object.assign({}, state, {
        savedArticles: action.payload
      });
    case SAVE_ARTICLE:
      return Object.assign({}, state, {
        savedArticles: state.savedArticles.concat(action.payload)
      });
    case REMOVE_SAVED_ARTICLE:
      return {
        ...state,
        savedArticles: state.savedArticles.filter(article => {
          return article._id !== action.payload;
        })
      };
    default:
      return state;
  }
}

export default rootReducer;