import React from "react";


const App = () => {
  fetch("https://raw.githubusercontent.com/Aquite/react-parcel-example-1/main/weather.csv")
    .then(response => response.json())
    .then((data) => console.log(data))

  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
    </div>
  );
}


export default App;
