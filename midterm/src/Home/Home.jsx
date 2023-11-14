import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Articles } from './ArticlesData';
import './Home.css';

const Home = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [sortOption, setSortOption] = useState('authors');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setArticles(Articles);
  }, []);

  const handleSearch = () => {
    const filteredArticles = Articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.keywords.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArticles(filteredArticles);
  };

  const handleSort = () => {
    let newSortOrder = 'asc';

    if (sortOption === 'authors' || sortOption === 'title') {
      newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } //when button first time clicked, it sort authors asc,  at second click sort desc, at third click sort titles asc, then sort desc

    setSortOrder(newSortOrder);

    const sortedArticles = [...articles].sort((a, b) => {
      const valueA = a[sortOption].toLowerCase();
      const valueB = b[sortOption].toLowerCase();

      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setArticles(sortedArticles);
  };

  const handleArticleClick = (id) => {
    history.push(`/article/${id}`);
  };

  return (
    <div className='article-class'>
      <h1 className='article-head'>Almatynyn' tunderi-ay</h1>
      <input
        className='article-search'
        type="text"
        placeholder="Search by author, title, or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className='article-button'>Search</button>
      <button onClick={handleSort} className='article-button'>Sort</button>

      <ul>
        {articles.map((article) => (
          <div key={article.id} onClick={() => handleArticleClick(article.id)} className='article-list'>
            <Link to={`/${article.id}`}>
                <div className='article-title'>
                    {article.title}
                </div>
                <img src={article.photo} className='article-photo'/>
                <div className='article-author'>
                    Author: {article.authors}
                </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
