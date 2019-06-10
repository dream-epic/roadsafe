import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";
import News from "../../components/News";

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

      const selectedArticles = articles.slice(-10);
      this.setState({ data: selectedArticles });
    });
  }

  render() {
    return (
      <div>
        <h1>This is the homepage!</h1>
        {this.state.data.length ? (
          this.state.data.map(e => (
            <News
              key={e.articleLink}
              title={e.title}
              imgSrc={e.imgSrc}
              description={e.description}
              articleLink={e.articleLink}
            />
          ))
        ) : (
          <h1>Data is loading...</h1>
        )}
      </div>
    );
  }
}
