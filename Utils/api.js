import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-api-w4qo.onrender.com/api",
});

export const getArticles = () => {
  let path = "/articles";

  return ncNews.get(path).then(({ data: { articles } }) => {
    console.log(articles, "<--- res in api");
    return articles;
  });
};
