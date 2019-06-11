import React from "react";
import "./Introduction.scss";

import React from "react";

export default function Introduction() {
  return (
    
    <div className="intro">
      <h1>Welcome to RoadSafe</h1>
      <p>An application that provides interactive map services.</p>

      <div className="potholes-intro">
        <h2>About Potholes</h2>
        <p>
          A pothole is a depression in a road surface, usually asphalt pavement,
          where traffic has removed broken pieces of the pavement. It is usually
          the result of water in the underlying soil structure and traffic
          passing over the affected area. Water first weakens the underlying
          soil; traffic then fatigues and breaks the poorly supported asphalt
          surface in the affected area. Continued traffic action ejects both
          asphalt and the underlying soil material to create a hole in the
          pavement.
        </p>

        <p>
          The American Automobile Association estimated in the five years prior
          to 2016 that 16 million drivers in the United States have suffered
          damage from potholes to their vehicle including tire punctures, bent
          wheels, and damaged suspensions with a cost of $3 billion a year.
        </p>

        <p>
          CDOT has inspectors in neighborhoods across the city and construction
          crews assigned to repair potholes throughout the year. Because most
          potholes occur during the winter and spring, CDOT schedules crews to
          work every day, including weekends during ‘pothole season’. When a
          cave-in or sinkhole is reported, CDOT inspectors will assess the
          degree of damage to the roadway and determine what caused the problem.
          It will then forward its assessment to the agency or utility company
          that needs to make the repairs. Depending on what caused the cave-in,
          work under the roadway might need to be completed before the road
          repairs are made. Residents are asked to report potholes and cave-ins
          they encounter
        </p>
      </div>
    </div>
  );
}
