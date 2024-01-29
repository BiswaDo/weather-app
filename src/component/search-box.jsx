function searchBox() {
  async function search() {
    const API_key = "e807385dc4cef16d9f5b3aaa9fac79ca";
    const placeInput = document.querySelector(".place");
    const tempDisplay = document.querySelector(".temp");
    const timeDisplay = document.querySelector(".time");
    const descriptionDisplay = document.querySelector(".des");
    const mainIcon = document.querySelector(".main-icon");
    const humidityDisplay = document.querySelector(".humidity");
    const pressureDisplay = document.querySelector(".pressure");
    const speedDisplay = document.querySelector(".speed");
    const cityDescriptions = document.querySelectorAll(".city-des li");

    if (placeInput.value === "") return;

    const fetchData = async (url) => {
      const response = await fetch(url);
      return await response.json();
    };

    const updateCityDescription = async (city, index) => {
      const cityName = city.textContent;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;

      try {
        const data = await fetchData(apiUrl);
        const weatherDescription = data.weather[0].description;
        cityDescriptions[index].textContent = weatherDescription;
      } catch (error) {
        console.error(`Error fetching weather data for ${cityName}:`, error);
      }
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${placeInput.value}&appid=${API_key}&units=metric`;
    const data = await fetchData(url);

    tempDisplay.innerHTML = Math.floor(data.main.temp);

    const date = new Date();
    timeDisplay.innerHTML = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const desc = data.weather[0].description;
    descriptionDisplay.innerHTML = desc;

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
    mainIcon.src = iconUrl;

    const humidity = data.main.humidity;
    const pressure = (data.main.pressure * 0.0145037738).toFixed(2);
    const speed = Math.floor(data.wind.speed);

    humidityDisplay.innerHTML = `${humidity} %`;
    pressureDisplay.innerHTML = `${pressure} psi`;
    speedDisplay.innerHTML = `${speed} m/s`;

    const cityNames = document.querySelectorAll(".city-name li");
    cityNames.forEach(updateCityDescription);
  }

  return (
    <div className="search-box">
      <div className="search">
        <label>
          <input
            className="place"
            type="text"
            placeholder="Search for location"
          />
          <button className="btn" onClick={search} type="submit">
            <span className="material-symbols-rounded btn-icon">search</span>
          </button>
        </label>
      </div>
      <div className="profile">
        <li></li>
      </div>
    </div>
  );
}

export default searchBox;
