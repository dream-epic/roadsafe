import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";
import News from "../../components/News";
import Introduction from "../../components/Introduction";
import Spinner from "../../components/Spinner";
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
          try {
            const article = {
              articleLink: $(element).attr("href"),
              imgSrc: $(element).children()[0].children[0].children[0].attribs[
                "data-src"
              ],
              title: $(element).attr("title"),
              description: $(element).children()[1].children[1].children[0].data
            };

            articles.push(article);
          } catch (err) {
            console.clear();
          }
        });

      const selectedArticles = articles.slice(-12);
      console.log(selectedArticles);
      this.setState({ data: selectedArticles });
    });
  }

  render() {
    return (
      <>
        {this.state.data.length ? (
          <>
            <Introduction />
            <div className="news-section">
              <h1 className="news-section-title text-center">
                Latest News about Potholes
              </h1>
              <div className="row justify-content-around align-items-stretch">
                {this.state.data.map(e => (
                  <div className="col-12 col-lg-6 col-xl-4" key={e.articleLink}>
                    <News
                      title={e.title}
                      imgSrc={e.imgSrc}
                      description={e.description}
                      articleLink={e.articleLink}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}
