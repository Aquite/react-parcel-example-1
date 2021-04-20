import React from "react";
import {csv} from "d3-fetch";

const App = () => {
  csv("https://raw.githubusercontent.com/Aquite/react-parcel-example-1/main/weather.csv")
    .then((data) => console.log(data))

  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>test comment</p>
    </div>
  );
}


export default App;
