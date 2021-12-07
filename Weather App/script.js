//Openweather API key
const api = "8b5901828b861f71cae3643e70eadb4c";
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

window.addEventListener('load', () => {
    let long;
    let lat;
    //Store location of user

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {

        //store long and lat values into their respective variables    
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
        


        // fetch data 
        fetch(base).then((response) => {
            return response.json();
        })
        .then((data) => {
            const { temp } = data.main;
            const place = data.name;
            const { description, icon } = data.weather[0];
            const { sunrise, sunset } = data.sys;

            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        })
        });
    }
    else alert("You need to allow browser to fetch location");
})


