import { GET_ARTICLES, GET_SAVED_ARTICLES, SAVE_ARTICLE, REMOVE_SAVED_ARTICLE } from "../constants/action-types";
import axios from 'axios';

export function getArticles(params) {
  return function(dispatch) {
    return axios
      .get("/api/query", {params: params})
      .then(response => {
        dispatch({ type: GET_ARTICLES, payload: response })
      });
  }
}

export function getSavedArticles(params) {
  return function(dispatch) {
    return axios
      .get("/api/articles")
      .then(response => {
        dispatch({ type: GET_SAVED_ARTICLES, payload: response.data });
      });
  }
}

export function saveArticle(article) {
  return function(dispatch) {
    return axios
      .post("/api/articles", article)
      .then(response => {
        const newArticle = response.data.article
        dispatch({ type: SAVE_ARTICLE, payload: newArticle });
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
        dispatch({ type: REMOVE_SAVED_ARTICLE, payload: id });
      })
      // .catch(err => console.log(err));
  }
}