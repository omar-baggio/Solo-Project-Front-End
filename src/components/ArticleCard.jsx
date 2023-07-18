import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <section key={article.article_id} className="articlesbox">
      <h2>{article.title}</h2>

      <img className="imgList" src={article.article_img_url} alt="" />
      <p>created at: {article.created_at}</p>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Comments count: {article.comment_count}</p>
    </section>
  );
};

export default ArticleCard;
