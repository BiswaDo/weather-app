

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
    temp.innerHTML = Math.floor(data.main.temp)+"°C";

    let date = new Date();
    let current_time = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    const time = document.getElementsByClassName("time");
    console.log(time);
    time[0].innerHTML = current_time;
  }

    return(
        <div className="search-box">
            <div className="search">
                    <label>
                        <input  className="place" type="text" placeholder="Search for location"/>
                        <button onClick={search} type="submit"><img src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png" alt="" /></button>
                    </label>
            </div>
            <div className="profile">
                <li></li>
            </div>
        </div>
    )
}

export default searchBox;