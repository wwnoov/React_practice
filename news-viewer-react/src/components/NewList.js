import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category == 'all' ? '' : '&category=' + category;
      const apiurl =
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=b426657ac76643a3bf0332588cd75547' +
        query;
      const response = await axios.get(apiurl);
      console.log(response.data.articles);
      setArticles(response.data.articles);
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <>대기중...</>;
  }
  if (!articles) {
    return null;
  }
  return (
    <>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </>
  );
};

export default NewList;
