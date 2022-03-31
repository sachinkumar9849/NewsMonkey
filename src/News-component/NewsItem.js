import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="img_block">
        <img
          className="dfd"
          src={
            !imageUrl
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
              : imageUrl
          }
        />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By <strong>{!author ? "Unknown" : author} </strong> on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href="/Newsdetail" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
