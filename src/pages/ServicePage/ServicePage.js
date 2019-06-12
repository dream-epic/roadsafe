import React, { Component } from "react";
import ServiceBot from "../../components/ServiceBot";
import Aside from "../../components/Aside";
import "./ServicePage.scss";

export default class ServicePage extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row align-items-center d-flex-wrap justify-content-around">
            <div className="col-12 col-lg-7 d-flex justify-content-center">
              <Aside />
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center service-bot-wrapper">
              <ServiceBot />
            </div>
          </div>
        </div>
        <div className="imbed-map d-flex justify-content-center">
          <iframe
            title="city-potholes-patched"
            src="https://data.cityofchicago.org/dataset/Potholes-Patched-Previous-Seven-Days/caad-5j9e/embed?width=800&height=600"
            className="patched-iframe"
          />
        </div>
      </>
    );
  }
}
