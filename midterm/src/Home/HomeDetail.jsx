import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { Articles } from './ArticlesData';

const HomeDetail = ({ match }) => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = Articles.find((article) => String(article.id) === id);
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [id]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Authors: {article.authors}</p>
      <p>Keywords: {article.keywords}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default HomeDetail;
