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
    // <div className="intro">
    //   <h1>Welcome to RoadSafe</h1>
    //   <p>An application that provides interactive map services.</p>

    //   <div className="potholes-intro">
    //     <h2>About Potholes</h2>
    //     <p>
    //       A pothole is a depression in a road surface, usually asphalt pavement,
    //       where traffic has removed broken pieces of the pavement. It is usually
    //       the result of water in the underlying soil structure and traffic
    //       passing over the affected area. Water first weakens the underlying
    //       soil; traffic then fatigues and breaks the poorly supported asphalt
    //       surface in the affected area. Continued traffic action ejects both
    //       asphalt and the underlying soil material to create a hole in the
    //       pavement.
    //     </p>

    //     <p>
    //       The American Automobile Association estimated in the five years prior
    //       to 2016 that 16 million drivers in the United States have suffered
    //       damage from potholes to their vehicle including tire punctures, bent
    //       wheels, and damaged suspensions with a cost of $3 billion a year.
    //     </p>

    //     <p>
    //       CDOT has inspectors in neighborhoods across the city and construction
    //       crews assigned to repair potholes throughout the year. Because most
    //       potholes occur during the winter and spring, CDOT schedules crews to
    //       work every day, including weekends during ‘pothole season’. When a
    //       cave-in or sinkhole is reported, CDOT inspectors will assess the
    //       degree of damage to the roadway and determine what caused the problem.
    //       It will then forward its assessment to the agency or utility company
    //       that needs to make the repairs. Depending on what caused the cave-in,
    //       work under the roadway might need to be completed before the road
    //       repairs are made. Residents are asked to report potholes and cave-ins
    //       they encounter
    //     </p>
    //   </div>
    // </div>
  );
}
