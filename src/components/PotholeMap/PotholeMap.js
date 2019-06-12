import React, { Component } from "react";
import ReactMapboxGl, { MapContext, Source } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { db, dbfirestore } from "../../firebase";
import swal from "sweetalert";
import Spinner from "../Spinner";
import "./PotholeMap.scss";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

export default class PotholeMap extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    db.collection("potholes").onSnapshot(res => {
      const dbData = {
        type: "FeatureCollection",
        features: []
      };
      res.forEach(e => {
        const phfeature = {
          type: "Feature",
          properties: {
            address: e.data().address,
            reportedAt: e.data().reportedAt.toDate()
          },
          geometry: {
            type: "Point",
            coordinates: [...e.data().lngLat]
          }
        };
        dbData.features.push(phfeature);
      });
      this.setState({ data: dbData });
    });
  }

  render() {
    const MAP_SOURCE_OPTION = {
      type: "geojson",
      data: this.state.data
    };
    if (this.state.data) {
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
            <Source id="potholeSource" geoJsonSource={MAP_SOURCE_OPTION} />
            <MapContext.Consumer>
              {map => {
                if (map._controls.length < 3) {
                  map.addLayer({
                    id: "potholePoints",
                    type: "circle",
                    source: "potholeSource",
                    paint: {
                      "circle-radius": 6,
                      "circle-color": "#fca311",
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

                  map.on("click", "potholePoints", e => {
                    let content = `<h3 class="pothole-info-address text-center">${
                      e.features[0].properties.address
                    }</h3>`;
                    content += `<h4 class="pothole-info-date text-center">${
                      e.features[0].properties.reportedAt
                    }</h4>`;
                    new mapboxgl.Popup()
                      .setLngLat(e.lngLat)
                      .setHTML(content)
                      .addTo(map);
                  });

                  map.on("mousemove", "potholePoints", e => {
                    map.setPaintProperty("potholePoints", "circle-color", [
                      "case",
                      [
                        "==",
                        ["get", "address"],
                        e.features[0].properties.address
                      ],
                      "#732002",
                      "#fca311"
                    ]);
                  });

                  map.on("mouseenter", "potholePoints", () => {
                    map.getCanvas().style.cursor = "pointer";
                  });

                  map.on("mouseleave", "potholePoints", () => {
                    map.getCanvas().style.cursor = "";
                    map.setPaintProperty(
                      "potholePoints",
                      "circle-color",
                      "#fca311"
                    );
                  });

                  const geocoder = new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl,
                    placeholder:
                      "Where is the new pothole that you want to report?"
                  });

                  map.addControl(geocoder);

                  map.addControl(new mapboxgl.FullscreenControl());

                  map.addControl(new mapboxgl.NavigationControl());

                  geocoder.on("result", e => {
                    if (document.querySelector(".mapboxgl-popup"))
                      document.querySelector(".mapboxgl-popup").remove();

                    const data = {
                      address: e.result.place_name,
                      lngLat: e.result.geometry.coordinates,
                      reportedAt: dbfirestore.Timestamp.fromDate(new Date())
                    };

                    function reportPothole(data, mapObj) {
                      document
                        .getElementById("report-btn")
                        .addEventListener("click", () => {
                          console.log(data);
                          db.collection("potholes")
                            .add(data)
                            .then(res => {
                              swal("Pothole reported, thank you!");
                              document
                                .querySelector(".mapboxgl-popup")
                                .remove();
                              document.querySelector(
                                ".mapboxgl-ctrl-geocoder--input"
                              ).value = "";
                              mapObj.forceUpdate();
                            });
                        });
                    }

                    let content =
                      "<h3 class='pothole-info-address text-center'>Do you want to report a pothole here?</h3>";
                    content += `<div class="report-btn-wrapper"><button class="btn btn--stripe btn--radius" id="report-btn">Report this Location</button></div>`;

                    const popup = new mapboxgl.Popup()
                      .setLngLat(e.result.geometry.coordinates)
                      .setHTML(content);

                    popup.addTo(map);

                    reportPothole(data, this);
                  });
                }
              }}
            </MapContext.Consumer>
          </Map>
        </div>
      );
    } else return <Spinner />;
  }
}
