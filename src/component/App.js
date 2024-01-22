import React from "react"
import Search_Box from "./search-box"
import Weather_Box from "./weather-data-box"
import Side_bar from "./side_bar";


function app() {
  
  

  return (
    <div className="container">
      <div className="sidebar">
        <Side_bar />
      </div>
      <div className="main-box">
        <Search_Box />
        <Weather_Box />
        <div className="forecast-box border"></div>
      </div>
    </div>
  );
}

export default app;

