import React from "react";
import "./News.scss";
import "bootstrap-css-only";

export default function News(props) {
  return (
    <div className="card" style={{ width: "22.5rem" }}>
      <img className="card-img-top" src={props.imgSrc} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.articleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Click to View Article
        </a>
      </div>
    </div>
  );
}
