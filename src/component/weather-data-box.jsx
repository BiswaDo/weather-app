
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
                        <p className="des">rain</p>
                    </div>
                </div>
                    <div className="weather-other-detail">
                        <li ><span className="material-symbols-outlined">humidity_high</span><br /><p className="humidity">35 %</p></li>
                        <li ><span className="material-symbols-outlined">compare_arrows</span><br /><p className="pressure">14.76 psi</p></li>
                        <li ><span className="material-symbols-outlined">airwave</span><br /><p className="speed">1 m/s</p></li>
                    </div>
                
            </div>
            <div className="weather-map">
                
            </div>
            <div className="weather-city poppins-regular">
                <p className="heading">Popular Cities</p>
                <div className="popular-city">
                    <div className="city-name">    
                        <li>Kolkata</li>
                        <li>Delhi</li>
                        <li>Pune</li>
                        <li>Bangalore</li>
                        <li>Mumbai</li>
                    </div>
                    <div class="city-des">
                        <li id="kolkata-des">overcast clouds</li>
                        <li id="delhi-des">haze</li>
                        <li id="pune-des">scatterd clouds</li>
                        <li id="bangalore-des">mist</li>
                        <li id="mumbai-des">smoke</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default weatherBox;
