import React from "react";
import "./Introduction.scss";

export default function Introduction() {
  return (
    <>
      <div className="jumbotron text-center splash">
        <h1 className="animated infinite pulse">RoadSafe</h1>
        <p className="lead">
          Work with us to remove potholes and build a better Chicago!
        </p>
      </div>
      <h1 className="app-intro-title text-center">What is RoadSafe?</h1>
      <p className="app-intro-general text-center">
        RoadSafe offers opportunities for citizens to engage in resolving
        pothole issues in the city of Chicago.
      </p>
      <div className="container row justify-content-around pt-3">
        <div className="col-md-4">
          <div className="text-center">
            <i className="fab fa-leanpub intro-icon pb-2" />
            <p className="intro-icon-title">Learn</p>
            <p className="intro-icon-lead">
              Read latest news regarding road conditions and potholes in the
              city.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center">
            <i className="fas fa-search-location intro-icon pb-2" />
            <p className="intro-icon-title">Engage</p>
            <p className="intro-icon-lead">
              See where potholes are reported or Report a pothole you find in
              the city.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center">
            <i className="fas fa-network-wired intro-icon pb-2" />
            <p className="intro-icon-title">Connect</p>
            <p className="intro-icon-lead">
              Talk to our AI chatbot to connect to different city services about
              potholes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
