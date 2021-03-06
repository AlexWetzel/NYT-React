import { GET_ARTICLES } from "../constants/action-types";

export function formatArticles({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === GET_ARTICLES) {
        if (action.payload.status === 200) {
          let articles = action.payload.data.articles;

          const formattedArticles = articles.map(article => {
            return article = {
              title: article.title,
              date: article.publishedAt,
              url: article.url,
              description: article.description
            };
          });

          action.payload =  formattedArticles;
          // console.log(action.payload);
        }
      }
      return next(action);
    };
  };
}
