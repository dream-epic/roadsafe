import React, { Component } from "react";
import ComplaintForm from "../../components/ComplaintForm";
import PotholeMap from "../../components/PotholeMap";

export default class MapPage extends Component {
  render() {
    return (
      <div>
        {/* <h1>This is the mappage!</h1>
        <ComplaintForm /> */}
        <PotholeMap />
      </div>
    );
  }
}
