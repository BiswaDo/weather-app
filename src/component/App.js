import React from "react"
import Search_Box from "./search-box"
import Side_bar from "./side_bar";
function app() {
  return (
    <div className="container border">
      <div className="sidebar border">
        <Side_bar />
      </div>
      <div className="main-box">
        <Search_Box />
        <div className="weather-data-box border">
  
        </div>
        <div className="forecast-box border"></div>
      </div>
    </div>
  );
}

export default app;

