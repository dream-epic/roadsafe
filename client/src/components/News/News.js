import React from "react";
import "./News.scss";

export default function News(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.imgSrc} />
      <p>{props.description}</p>
      <a href={props.articleLink} target="_blank" rel="noopener noreferrer">
        Click to View Article
      </a>
    </div>
  );
}
