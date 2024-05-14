// Selecting DOM elements
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".temp_location p");
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener('submit', event => {
    event.preventDefault()
    const cityName = searchField.value
    getWeatherInfo(cityName)
})

const fetchData = url => {
    return new Promise((resolve, reject) => {
        try{
            const response = fetch(url)
            resolve(response)
        } catch (e) {
            reject(e)
        }        
    })
}

const getWeatherInfo = async city => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=a7e9b9c9c7dc4d07982121212232309&q=${city}&aqi=no`
        // fetchData(url)
            // .then(response => response.json())
            // .then(weatherData => {
                // All the DOM operations will come here
            // })
            // .catch(error => {
            //      Error handling
            // })
        const response = await fetch(url);
        const weatherData = await response.json()
        console.log(weatherData)
        const temp = weatherData.current.temp_c;
        const name = weatherData.location.name;
        const condition = weatherData.current.condition.text;
        const imageUrl = weatherData.current.condition.icon;
        const date = weatherData.current.last_updated;
    
        temperatureField.innerText = temp
        cityField.innerText = name
        weatherField.innerText = condition
        emojiField.src = imageUrl
        dateField.innerText = date
    
        console.log(temp, name, condition, imageUrl, date)
    } catch (e) {
        console.log('Error occurred: ', e)
        alert("Falling back to default city")
        getWeatherInfo('Mumbai')
    }
    
}


getWeatherInfo('Mumbai')