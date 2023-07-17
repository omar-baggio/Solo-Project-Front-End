import { useEffect, useState } from "react";
import { getArticles } from "../../Utils/api";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((dataFromApi) => {
      console.log(dataFromApi, "<--- articles in articleList");
      setArticles(dataFromApi);
    });
  }, []);

  return (
    <>
      <h1>Article List</h1>;
      {articles.map((article) => {
        return (
          <section key={article.article_id} className="articlesbox">
            <h2> {article.title}</h2>
            <img className="imgList" src={article.article_img_url} />
            <p>created at: {article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>Comments count: {article.comment_count}</p>
          </section>
        );
      })}
    </>
  );
};

export default ArticlesList;
