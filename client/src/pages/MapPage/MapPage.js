import React, { Component } from "react";
import ComplaintForm from "../../components/ComplaintForm";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaGVndWFuZWx2aXMiLCJhIjoiY2p0cWFnMmR4MGRlOTQ1bXVkNGhqbnYxYiJ9.g43Zo8jIYEj6l-o_3MD3Hg"
});

export default class MapPage extends Component {
  render() {
    return (
      <div>
        <h1>This is the mappage!</h1>
        <ComplaintForm />
        <div style={{ width: "800px", height: "600px" }}>
          <Map
            style="mapbox://styles/mapbox/dark-v10"
            zoom={[10]}
            center={[-87.6298, 41.8351]}
            containerStyle={{
              height: "100%",
              width: "100%"
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            >
              <Feature coordinates={[-87.6298, 41.8351]} />
            </Layer>
          </Map>
        </div>
      </div>
    );
  }
}
