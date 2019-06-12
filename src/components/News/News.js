import React from "react";
import "bootstrap-css-only";
import "./News.scss";

export default function News(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.imgSrc} alt="news" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text text-center">{props.description}</p>
        <div className="text-center">
          <a
            href={props.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary view-article-btn"
          >
            View Article
          </a>
        </div>
      </div>
    </div>
  );
}
