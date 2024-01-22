
function weatherBox(){
    
    return(    
        
        <div className="mid-part">
            <div className="current-weather">
                <h5>Current Weather</h5>
                <h6 className="time">06:30 PM</h6>
                <div className="weather-data">
                    <div className="current-data">
                    <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="" />
                    </div>
                    <div className="weather-icon">
                        <p className="temp">25 c</p>
                    </div>
                </div>
                {/* <div className="weather-other-detail">
                    <img src="https://cdn-icons-png.flaticon.com/512/481/481453.png" alt="humidity" />
                    <img src="https://cdn-icons-png.flaticon.com/512/481/481453.png" alt="humidity" />
                    <img src="https://cdn-icons-png.flaticon.com/512/481/481453.png" alt="humidity" />
                    
                </div> */}
            </div>
            <div className="weather-map border">

            </div>
            <div className="weather-city border">

            </div>
        </div>
    );
}

export default weatherBox;
