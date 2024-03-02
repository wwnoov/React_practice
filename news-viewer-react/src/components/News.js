import React, { useCallback, useState } from 'react';
import NewList from './NewList';

const News = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((e, category) => {
    setCategory(category);
    e.preventDefault();
  }, []);
  return (
    <section>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            onClick={(e) => onSelect(e, 'all')}
            className={category == 'all' ? 'nav-link active' : 'nav-link'}
            aria-current="page"
            href="#"
          >
            전체보기
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={(e) => onSelect(e, 'business')}
            className={category == 'business' ? 'nav-link active' : 'nav-link'}
            aria-current="page"
            href="#"
          >
            비지니스
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={(e) => onSelect(e, 'entertainment')}
            className={
              category == 'entertainment' ? 'nav-link active' : 'nav-link'
            }
            aria-current="page"
            href="#"
          >
            엔터테이먼트
          </a>
        </li>
      </ul>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <NewList category={category} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
