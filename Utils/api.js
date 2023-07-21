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

export const getArticleById = (article_id) => {
  let path = `/articles/${article_id}`;

  return ncNews.get(path, article_id).then(({ data: { article } }) => {
    return article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  let path = `/articles/${article_id}/comments`;

  return ncNews.get(path, article_id).then(({ data: { comments } }) => {
    return comments;
  });
};

export const patchArticle = (article_id, changeNumber) => {
  let path = `/articles/${article_id}`;

  const patchBody = {
    inc_votes: changeNumber,
  };

  return ncNews.patch(path, patchBody).then(({ data }) => {
    return data;
  });
};

export const postComment = (newComment, article_id, username) => {
  let path = `/articles/${article_id}/comments`;

  const postBody = { username: username, body: newComment };

  return ncNews.post(path, postBody).then(({ data }) => {
    console.log(data.comment, "<<<<<data");
    return data.comment;
  });
};

export const getUsers = () => {
  let path = "/users";
  return ncNews.get(path).then(({ data: { users } }) => {
    return users;
  });
};
