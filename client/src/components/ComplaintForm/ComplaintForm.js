import React, { Component } from "react";
// https://www.npmjs.com/package/react-geocode

export default class ComplaintForm extends Component {
  render() {
    return (
      <form>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          placeholder="Street, City, State, Zipcode"
        />
      </form>
    );
  }
}
