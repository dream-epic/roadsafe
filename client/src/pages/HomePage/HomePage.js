import React, { Component } from "react";
import cheerio from "cheerio";
import request from "request";

export default class HomePage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://cors-anywhere.herokuapp.com/https://chicago.cbslocal.com/tag/potholes/";
    this.loadNewsData(url);
  }

  loadNewsData(url) {
    console.log(url)
    request(url, (err, scrapeRes, html) => {
      const $ = cheerio.load(html);
      $("a").attr("class", "cbs-thumbnail-link").each((i, element) => {
        console.log($(element).attr("href"))
      })
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
