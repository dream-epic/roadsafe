import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";

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
          // links
          // console.log($(element).attr("href"))
          // images
          // console.log($(element).children()[0].children[0].children[0].attribs["data-src"])
        });
    });
  }

  render() {
    return (
      <div>
        <h1>This is the homepage!</h1>
      </div>
    );
  }
}
