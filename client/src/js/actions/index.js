import { GET_ARTICLES, GET_SAVED_ARTICLES, SAVE_ARTICLE, REMOVE_SAVED_ARTICLE } from "../constants/action-types";
import axios from 'axios';

export function getArticles(params) {
  return function(dispatch) {
    console.log(params);
    return axios
      .get(
        "https://newsapi.org/v2/everything",
        { params }
      )
      .then(response => {
        console.log(response);
        dispatch({ type: GET_ARTICLES, payload: response });
      });
  }
}

export function getSavedArticles(params) {
  return function(dispatch) {
    return axios
      .get("/api/articles")
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SAVED_ARTICLES, payload: response.data });
      });
  }
}

export function saveArticle(article) {
  return function(dispatch) {
    return axios
      .post("/api/articles", article)
      .then(response => {
        console.log(response);
        dispatch({ type: SAVE_ARTICLE, payload: article });
      })
      // .catch(err => console.log(err));
  }
}

export function removeArticle(id) {
  return function(dispatch) {
    console.log('test')
    return axios
      .delete("/api/articles/" + id)
      .then(response => {
        console.log(response);
        dispatch({ type: REMOVE_SAVED_ARTICLE, payload: id });
      })
      // .catch(err => console.log(err));
  }
}