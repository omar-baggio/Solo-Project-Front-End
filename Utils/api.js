import axios from "axios";
import Article from "../src/components/ArticleCard";

const ncNews = axios.create({
  baseURL: "https://nc-news-api-w4qo.onrender.com/api",
});

export const getArticles = () => {
  let path = "/articles";

  return ncNews.get(path).then(({ data: { articles } }) => {
    return articles;
  });
};
