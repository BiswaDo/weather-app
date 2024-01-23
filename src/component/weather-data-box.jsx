
function weatherBox(){

    
    
    return(    
        
        <div className="mid-part">
            <div className="current-weather poppins-regular">
                <p className="heading">Current Weather</p>
                <p className="time poppins-thin">06:30 PM</p>
                <div className="weather-data">
                    <div className="current-data">
                    <img className="main-icon" src="https://openweathermap.org/img/wn/10d@4x.png" alt="" /> {/*logo change*/}
                    </div>
                    <div className="weather-icon">
                        <p className="temp">25</p>
                        <p className="des"></p>
                    </div>
                </div>
                
            </div>
            <div className="weather-map border">
            
            </div>
            <div className="weather-city border">

            </div>
        </div>
    );
}

export default weatherBox;
