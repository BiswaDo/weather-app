

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
    temp.innerHTML = Math.floor(data.main.temp)+"°c";
    
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
    let icon = data.weather[0].icon;
    let setIcon = document.getElementsByClassName("main-icon")[0];


    switch (icon) {
        case "01d":
            setIcon.src = "https://openweathermap.org/img/wn/01d@4x.png";
            break;
        case "02d":
            setIcon.src = "https://openweathermap.org/img/wn/02d@4x.png";
            break;
        case "03d":
            setIcon.src = "https://openweathermap.org/img/wn/03d@4x.png";
            break;
        case "04d":
            setIcon.src = "https://openweathermap.org/img/wn/04d@4x.png";
            break;
        case "09d":
            setIcon.src = "https://openweathermap.org/img/wn/09d@4x.png";
            break;
        case "010d":
            setIcon.src = "https://openweathermap.org/img/wn/10d@4x.png";
            break;
        case "011d":
            setIcon.src = "https://openweathermap.org/img/wn/11d@4x.png";
            break;
        case "013d":
            setIcon.src = "https://openweathermap.org/img/wn/13d@4x.png";
            break;
        case "050d":
            setIcon.src = "https://openweathermap.org/img/wn/50d@4x.png";
            break;
        case "01d":
            setIcon.src = "https://openweathermap.org/img/wn/01d@4x.png";
            break;
        case "02d":
            setIcon.src = "https://openweathermap.org/img/wn/02d@4x.png";
            break;
        case "03d":
            setIcon.src = "https://openweathermap.org/img/wn/03d@4x.png";
            break;
        case "04d":
            setIcon.src = "https://openweathermap.org/img/wn/04d@4x.png";
            break;
        case "09d":
            setIcon.src = "https://openweathermap.org/img/wn/09d@4x.png";
            break;
        case "010d":
            setIcon.src = "https://openweathermap.org/img/wn/10d@4x.png";
            break;
        case "011d":
            setIcon.src = "https://openweathermap.org/img/wn/11d@4x.png";
            break;
        case "013d":
            setIcon.src = "https://openweathermap.org/img/wn/13d@4x.png";
            break;
        case "050d":
            setIcon.src = "https://openweathermap.org/img/wn/50d@4x.png";
            break;
        case "01n":
            setIcon.src = "https://openweathermap.org/img/wn/01n@4x.png";
            break;
        case "02n":
            setIcon.src = "https://openweathermap.org/img/wn/02n@4x.png";
            break;
        case "03n":
            setIcon.src = "https://openweathermap.org/img/wn/03n@4x.png";
            break;
        case "04n":
            setIcon.src = "https://openweathermap.org/img/wn/04n@4x.png";
            break;
        case "09n":
            setIcon.src = "https://openweathermap.org/img/wn/09n@4x.png";
            break;
        case "10n":
            setIcon.src = "https://openweathermap.org/img/wn/10n@4x.png";
            break;
        case "11n":
            setIcon.src = "https://openweathermap.org/img/wn/11n@4x.png";
            break;
        case "13n":
            setIcon.src = "https://openweathermap.org/img/wn/13n@4x.png";
            break;
        case "50n":
            setIcon.src = "https://openweathermap.org/img/wn/50n@4x.png";
            break;
        default:
            return 0;
    }
    
    
    
  }

    return(
        <div className="search-box">
            <div className="search">
                    <label>
                        <input  className="place" type="text" placeholder="Search for location"/>
                        <button onClick={search} type="button"><img src="https://img.icons8.com/?size=256&id=132&format=png" alt="" /></button>
                    </label>
            </div>
            <div className="profile">
                <li></li>
            </div>
        </div>
    )
}

export default searchBox;
