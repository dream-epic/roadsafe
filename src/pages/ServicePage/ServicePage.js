import React, { Component } from "react";
import ServiceBot from "../../components/ServiceBot";
import "./ServicePage.scss";

export default class ServicePage extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>This is the servicepage!</h1>
        <div className="bot-center">
          <ServiceBot />
        </div>
      </div>
    );
  }
}
