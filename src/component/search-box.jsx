

function searchBox(){
    const API_key = "e807385dc4cef16d9f5b3aaa9fac79ca";


    
    
    async function search(){
    const element = document.getElementsByClassName("place")[0];
    console.log(element);
    if (element.value===""){
      return 0;
    }
        
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&appid=${API_key}&units=metric`;
    
    let response = await fetch(url);
    let data = await response.json()
    const temp = document.getElementsByClassName("temp")[0];
    temp.innerHTML = Math.floor(data.main.temp);
    
    let date = new Date();
    let current_time = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const time = document.getElementsByClassName("time");
    console.log(time);
    time[0].innerHTML = current_time;
    
    let desc = data.weather[0].description;
    const description = document.getElementsByClassName("des")[0];
    description.innerHTML=desc;
    let setIcon = document.getElementsByClassName("main-icon")[0];


    const iconMapping = {
    "01d": "01d@4x.png",
    "02d": "02d@4x.png",
    "03d": "03d@4x.png",
    "04d": "04d@4x.png",
    "09d": "09d@4x.png",
    "10d": "10d@4x.png",
    "11d": "11d@4x.png",
    "13d": "13d@4x.png",
    "50d": "50d@4x.png",
    "01n": "01n@4x.png",
    "02n": "02n@4x.png",
    "03n": "03n@4x.png",
    "04n": "04n@4x.png",
    "09n": "09n@4x.png",
    "10n": "10n@4x.png",
    "11n": "11n@4x.png",
    "13n": "13n@4x.png",
    "50n": "50n@4x.png",
};

const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconMapping[iconCode]}`;

setIcon.src = iconUrl;

let humidity = data.main.humidity;
let pressure = data.main.pressure;
let speed = data.wind.speed;
let humidity_icon =  document.getElementsByClassName("humidity")[0];
let pressure_icon =  document.getElementsByClassName("pressure")[0];
let speed_icon =  document.getElementsByClassName("speed")[0];

humidity_icon.innerHTML = humidity+" %";
pressure_icon.innerHTML = (pressure * 0.0145037738).toFixed(2)+" psi";
speed_icon.innerHTML = Math.floor(speed)+" m/s";

    
    
    
  }

    return(
        <div className="search-box">
            <div className="search">
                    <label>
                        <input  className="place" type="text" placeholder="Search for location"/>
                        <button className="btn" onClick={search} type="submit"><span className="material-symbols-rounded btn-icon">search</span></button>
                    </label>
            </div>
            <div className="profile">
                <li></li>
            </div>
        </div>
    )
}

export default searchBox;
