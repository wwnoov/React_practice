import React from 'react';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, author } = article;
  return (
    <div className="col-md-6">
      <div className="card mb-4 box-shadow">
        {urlToImage && (
          <img className="card-img-top" src={urlToImage} alt="Card image cap" />
        )}
        <div className="card-body">
          <h4>{title}</h4>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={url}
                target="_blank"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
            </div>
            <small className="text-muted">{author}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
