import { ADD_ARTICLE, GET_ARTICLES } from "../constants/action-types";
import axios from 'axios';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getArticles(params) {
  return function(dispatch) {
    return axios
      .get(
        "https://newsapi.org/v2/everything",
        { params }
      )
      .then(articles => {
        dispatch({ type: GET_ARTICLES, payload: articles });
      });
  }
}