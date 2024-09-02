const apiKey = "1468060175118d01ca59b890e7ae7f67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icons")

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404){
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "blocknone";
}
else{
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if(data.weather[0].main == "Clouds"){
      weatherIcon.src ="imgs/clouds.png";
  } 
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "imgs/drizzle.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "imgs/rain.png";
  }
  else if(data.weather[0].main == "Foggy"){
    weatherIcon.src = "imgs/foggy.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "imgs/mist.png";
  }
  else if(data.weather[0].main == "Sun"){
    weatherIcon.src = "imgs/sun.png";
  }
 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";
}


}

searchBtn.addEventListener("click" , ()=>{
  checkWeather(searchBox.value);
})
