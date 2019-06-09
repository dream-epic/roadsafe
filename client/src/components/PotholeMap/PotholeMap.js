import React, { Component } from "react";
import ReactMapboxGl, { MapContext } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "./PotholeMap.scss";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaGVndWFuZWx2aXMiLCJhIjoiY2p0cWFnMmR4MGRlOTQ1bXVkNGhqbnYxYiJ9.g43Zo8jIYEj6l-o_3MD3Hg"
});

export default class PotholeMap extends Component {
  render() {
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
          <MapContext.Consumer>
            {map => {
              if (map._controls.length < 3) {
                map.addSource("cpsSource", {
                  type: "geojson",
                  data:
                    "https://raw.githubusercontent.com/heguanelvis/chi_pub_school_map/master/cps.geojson"
                });

                map.addLayer({
                  id: "cpsPoints",
                  type: "circle",
                  source: "cpsSource",
                  paint: {
                    "circle-radius": 6,
                    "circle-color": "#d97d0d",
                    "circle-opacity": [
                      "case",
                      ["boolean", ["feature-state", "hover"], false],
                      1,
                      0.6
                    ],
                    "circle-stroke-color": "#ffffff",
                    "circle-stroke-width": 0.5
                  }
                });

                map.on("click", "cpsPoints", e => {
                  let content = `<h3 class="popup-school-title">${
                    e.features[0].properties.longName
                  }</h3>`;
                  content += `<h4>${e.features[0].properties.phone}</h4>`;
                  content += `<h4>${e.features[0].properties.address}</h4>`;
                  content += `<h4>${
                    e.features[0].properties.enrollment
                  } students enrolled</h4>`;
                  content += `<h4><a class="popup-school-link" href="${
                    e.features[0].properties.schoolProfile
                  }"`;
                  content += ` target="_blank">Check School Profile</a><h4>`;
                  new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(content)
                    .addTo(map);
                });

                map.on("mousemove", "cpsPoints", e => {
                  map.setPaintProperty("cpsPoints", "circle-color", [
                    "case",
                    [
                      "==",
                      ["get", "longName"],
                      e.features[0].properties.longName
                    ],
                    "#732002",
                    "#d97d0d"
                  ]);
                });

                map.on("mouseenter", "cpsPoints", () => {
                  map.getCanvas().style.cursor = "pointer";
                });

                map.on("mouseleave", "cpsPoints", () => {
                  map.getCanvas().style.cursor = "";
                  map.setPaintProperty("cpsPoints", "circle-color", "#d97d0d");
                });

                const geocoder = new MapboxGeocoder({
                  accessToken: mapboxgl.accessToken,
                  mapboxgl: mapboxgl
                });

                map.addControl(geocoder);

                map.addControl(new mapboxgl.FullscreenControl());

                map.addControl(new mapboxgl.NavigationControl());

                // geocoder add point
                map.addSource("pothole-report-point", {
                  type: "geojson",
                  data: {
                    type: "FeatureCollection",
                    features: []
                  }
                });

                map.addLayer({
                  id: "picked-point",
                  source: "pothole-report-point",
                  type: "circle",
                  paint: {
                    "circle-radius": 7,
                    "circle-color": "#14213D"
                  }
                });

                geocoder.on("result", e => {
                  if (document.querySelector(".mapboxgl-popup"))
                    document.querySelector(".mapboxgl-popup").remove();

                  map
                    .getSource("pothole-report-point")
                    .setData(e.result.geometry);

                  const data = {
                    address: e.result.place_name,
                    lngLat: e.result.geometry.coordinates
                  };

                  function reportPothole(data) {
                    document
                      .getElementById("report-btn")
                      .addEventListener("click", () => {
                        console.log(data);
                      });
                  }

                  let content =
                    "<h2>Do you want to report a pothole here?</h2>";
                  content += `<div class="report-btn-wrapper"><button class="btn btn--stripe btn--radius" id="report-btn">Report this Location</button></div>`;

                  const popup = new mapboxgl.Popup()
                    .setLngLat(e.result.geometry.coordinates)
                    .setHTML(content);

                  popup.addTo(map);

                  reportPothole(data);
                });
              }
            }}
          </MapContext.Consumer>
        </Map>
      </div>
    );
  }
}
