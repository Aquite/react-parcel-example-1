import React from "react";
import {csv} from "d3-fetch";
import {useFetch} from "./hooks/useFetch";

const App = () => {
  /* THIS GOES IN APP.JS */
const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/Aquite/react-parcel-example-1/main/weather.csv"
  );

  console.log("from hook", loading, data);
  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>{ loading && "loading data!" }</p>
    </div>
  );
}


export default App;
