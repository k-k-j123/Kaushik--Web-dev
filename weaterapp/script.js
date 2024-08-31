const api_key="your api key";
const api_url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weathericon =document.querySelector(".weather-icon")

async function checkWheather(city)
{
   const response=await fetch(api_url + city + `&appid=${api_key}`)
   var data=await response.json();
   console.log(data); 
   
   document.querySelector(".city").innerHTML= data.name;
   document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
   document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

   if(data.weather[0].main=="Haze")
     weathericon.src="./mist.png";
   else if(data.weather[0].main=="Clouds")
      weathericon.src="./clouds.png";
   else if(data.weather[0].main=="Clear")
      weathericon.src="./clear.png";
   else if(data.weather[0].main=="Rain")
      weathericon.src="./rain.png";
   else if(data.weather[0].main=="Drizzle")
      weathericon.src="./drizzle.png";
   else if(data.weather[0].main=="Snow")
      weathericon.src="./snow.png";
   else if(data.weather[0].main=="Mist")
      weathericon.src="./mist.png";
}


button.addEventListener("click",()=>{
   checkWheather(search.value);
})