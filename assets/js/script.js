// let cityNameEl = document.getElementById("cityName").value;
let DateTime = luxon.DateTime;
let searchBtnEl = document.getElementById("searchBtn");
let minnBtnEl = document.getElementById("minnBtn");
let locationName = document.getElementById("cCity");
let nameCity;
let currentCity;
let currentDate;
let currentTemp;
let currentWind;
let currentHumi;
let currentUv;
let currentUvEl = document.getElementById("cUv");
let btnSectionEl = document.getElementById("btnColum")
let newBtn;
let inputEl = document.getElementById("cityName");


function getApi(){

  let currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="+nameCity+"&units=imperial&appid=2653796284e4c1372741d0410b9985ae";

    fetch(currentWeatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          console.log(data)
          let latC = data.coord.lat;
          let lonC = data.coord.lon;
          console.log(latC, lonC);
          currentDate = DateTime.fromSeconds(data.dt).toFormat('LL/dd/yyyy');
          let iconCur = data.weather[0].icon;         
          let iconCurUrl = "https://openweathermap.org/img/wn/"+iconCur+"@2x.png"
          console.log(iconCurUrl);
          currentCity = "The Current Weather in "+data.name+" ("+currentDate+")";
          document.getElementById("cCity").innerHTML = currentCity;
          let newIcon = document.createElement("img");
          newIcon.setAttribute("src", iconCurUrl);
          newIcon.setAttribute("style", "width: 60px");
          locationName.appendChild(newIcon);

                    
          let oneCallApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+latC+"&lon="+lonC+"&exclude=minutely,hourly,alerts&units=imperial&appid=2653796284e4c1372741d0410b9985ae";

            fetch(oneCallApiUrl)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                console.log(data)
                
                currentWind = "Wind: "+data.current.wind_speed+" MPH";
                currentTemp = "Temp: "+data.current.temp+" °F";
                currentHumi = "Humidity: "+data.current.humidity+" %";
                currentUv = "UV Index: "+data.current.uvi; 

                function uviColor() {
                  let color = data.current.uvi;
                  console.log(typeof color)
                  if (color <= 2) {
                    currentUvEl.style.backgroundColor = "green"
                  } else if (color > 2 && color <= 5) {
                    currentUvEl.style.backgroundColor = "yellow"
                  } else if (color > 5 && color <= 7) {
                    currentUvEl.style.backgroundColor = "orange"
                  } else if (color > 7 && color <= 10) {
                    currentUvEl.style.backgroundColor = "Red"
                  } else (color > 10) 
                    currentUvEl.style.backgroundColor = "Violet"
                  return;
                }; 
                uviColor();
                
                console.log(currentCity);
                console.log(currentDate);
                console.log(currentTemp);
                console.log(currentWind);
                console.log(currentHumi);
                console.log(currentUv);                 
                document.getElementById("cTemp").innerHTML = currentTemp;
                document.getElementById("cWind").innerHTML = currentWind;
                document.getElementById("cHumi").innerHTML = currentHumi;
                document.getElementById("cUv").innerHTML = currentUv;

                document.getElementById("fDate1").innerHTML = DateTime.fromSeconds(data.daily[1].dt).toFormat('LL/dd/yyyy');
                let icon1 = data.daily[1].weather[0].icon;
                let icon1Url = "https://openweathermap.org/img/wn/"+icon1+"@2x.png";               
                document.getElementById("fIcon1").src = icon1Url;
                document.getElementById("fTemp1").innerHTML = "Temp: "+data.daily[1].temp.day+" °F";
                document.getElementById("fWind1").innerHTML = "Wind: "+data.daily[1].wind_speed+" MPH";
                document.getElementById("fHumi1").innerHTML = "Humidity: "+data.daily[1].humidity+" %";

                document.getElementById("fDate2").innerHTML = DateTime.fromSeconds(data.daily[2].dt).toFormat('LL/dd/yyyy');
                let icon2 = data.daily[2].weather[0].icon;
                let icon2Url = "https://openweathermap.org/img/wn/"+icon2+"@2x.png";               
                document.getElementById("fIcon2").src = icon2Url;
                document.getElementById("fTemp2").innerHTML = "Temp: "+data.daily[2].temp.day+" °F";
                document.getElementById("fWind2").innerHTML = "Wind: "+data.daily[2].wind_speed+" MPH";
                document.getElementById("fHumi2").innerHTML = "Humidity: "+data.daily[2].humidity+" %";

                document.getElementById("fDate3").innerHTML = DateTime.fromSeconds(data.daily[3].dt).toFormat('LL/dd/yyyy');
                let icon3 = data.daily[3].weather[0].icon;
                let icon3Url = "https://openweathermap.org/img/wn/"+icon3+"@2x.png";               
                document.getElementById("fIcon3").src = icon2Url;
                document.getElementById("fTemp3").innerHTML = "Temp: "+data.daily[3].temp.day+" °F";
                document.getElementById("fWind3").innerHTML = "Wind: "+data.daily[3].wind_speed+" MPH";
                document.getElementById("fHumi3").innerHTML = "Humidity: "+data.daily[3].humidity+" %";

                document.getElementById("fDate4").innerHTML = DateTime.fromSeconds(data.daily[4].dt).toFormat('LL/dd/yyyy');
                let icon4 = data.daily[4].weather[0].icon;
                let icon4Url = "https://openweathermap.org/img/wn/"+icon4+"@2x.png";               
                document.getElementById("fIcon4").src = icon4Url;
                document.getElementById("fTemp4").innerHTML = "Temp: "+data.daily[4].temp.day+" °F";
                document.getElementById("fWind4").innerHTML = "Wind: "+data.daily[4].wind_speed+" MPH";
                document.getElementById("fHumi4").innerHTML = "Humidity: "+data.daily[4].humidity+" %";

                document.getElementById("fDate5").innerHTML = DateTime.fromSeconds(data.daily[5].dt).toFormat('LL/dd/yyyy');
                let icon5 = data.daily[5].weather[0].icon;
                let icon5Url = "https://openweathermap.org/img/wn/"+icon5+"@2x.png";               
                document.getElementById("fIcon5").src = icon5Url;
                document.getElementById("fTemp5").innerHTML = "Temp: "+data.daily[5].temp.day+" °F";
                document.getElementById("fWind5").innerHTML = "Wind: "+data.daily[5].wind_speed+" MPH";
                document.getElementById("fHumi5").innerHTML = "Humidity: "+data.daily[5].humidity+" %";
                          
              })
            
        });
        
};


function minnCity(){
    nameCity = "Minneapolis";
    console.log(nameCity);
    getApi();
}

function inputCity(){
  nameCity = document.getElementById("cityName").value;
  console.log(nameCity);
  getApi();
}

function saveHistory(){
  
  newBtn = document.createElement("button");
  newBtn.setAttribute("class", "button is-medium is-fullwidth is-link mt-2");
  newBtn.textContent = document.getElementById("cityName").value
  newBtn.value = document.getElementById("cityName").value;
  btnSectionEl.appendChild(newBtn);
  
}

function savedCity(){
  nameCity = newBtn.value;
  console.log(nameCity);
  getApi();
}

minnCity()

minnBtnEl.addEventListener('click', minnCity);
searchBtnEl.addEventListener('click', inputCity);
searchBtnEl.addEventListener('click', saveHistory);
btnSectionEl.addEventListener("click", savedCity);
