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
      .then(response => {
        console.log(response);
        // const articles = response.data.articles.map(article => {
        //   return article = {
        //     title: article.title,
        //     date: article.publishedAt,
        //     url: article.url
        //   };
        // });
        dispatch({ type: GET_ARTICLES, payload: response });
      });
  }
}

// export function saveArticle() {

// }