import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";
import News from "../../components/News";
import Introduction from "../../components/Introduction";
import "bootstrap-css-only";
import "./HomePage.scss";

export default class HomePage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://chicago.cbslocal.com/tag/potholes/";
    this.loadNewsData(url);
  }

  loadNewsData(url) {
    request(url, (err, scrapeRes, html) => {
      const $ = cheerio.load(html);

      let articles = [];
      $("a.cbs-thumbnail-link.content-type-video")
        .has(".thumbnail-wrapper")
        .each((i, element) => {
          const article = {
            articleLink: $(element).attr("href"),
            imgSrc: $(element).children()[0].children[0].children[0].attribs[
              "data-src"
            ],
            title: $(element).attr("title"),
            description: $(element).children()[1].children[1].children[0].data
          };

          articles.push(article);
        });

      const selectedArticles = articles.slice(-12);
      this.setState({ data: selectedArticles });
    });
  }

  render() {
    return (
      <>
        <Introduction />
        {this.state.data.length ? (
          <div className="row justify-content-around align-items-stretch">
            {this.state.data.map(e => (
              <div className="col-12 col-md-6 col-lg-4">
                <News
                  key={e.articleLink}
                  title={e.title}
                  imgSrc={e.imgSrc}
                  description={e.description}
                  articleLink={e.articleLink}
                />
              </div>
            ))}
          </div>
        ) : (
          <h1>Data is loading...</h1>
        )}
      </>
    );
  }
}
