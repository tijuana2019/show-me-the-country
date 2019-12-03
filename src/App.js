import React, { Component } from "react";
import InputField from "./components/input-field";
import "./styles/App.css";
import CountryCard from "./components/country-card";

class App extends Component {
  constructor() {
    super();

    this.state = {
      countryData: null,
    };
  }

  handleStuffFromChild = dataFromChild => {
    console.log(dataFromChild);
    this.callApi(dataFromChild);
  };

  callApi = (countryName) => {
    fetch(`https://restcountries-v1.p.rapidapi.com/name/${countryName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "977fb23600msh4ddc20963134706p1b5b50jsn076334f6d9fb"
      }
    })
      .then(initialResponse => initialResponse.json())
      .then(response => {
        this.setState({ countryData: response[0] })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    return (
      <div className="wrap" >
        <InputField sendToMyParent={this.handleStuffFromChild} />
        <CountryCard country={this.state.countryData} />
      </div>
    );
  }
}
export default App;

