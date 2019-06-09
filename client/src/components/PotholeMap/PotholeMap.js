import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "./PotholeMap.scss";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaGVndWFuZWx2aXMiLCJhIjoiY2p0cWFnMmR4MGRlOTQ1bXVkNGhqbnYxYiJ9.g43Zo8jIYEj6l-o_3MD3Hg"
});

export default function PotholeMap() {
  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/mapbox/light-v10"
        zoom={[10]}
        className="pothole-map"
        center={[-87.6298, 41.8351]}
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-87.6298, 41.8351]} />
        </Layer>
      </Map>
    </div>
  );
}
