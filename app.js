const form = document.querySelector('form[value-js="form-weather"]')
const inputCity = document.querySelector('input.input-city')
const containerWeather = document.querySelector('div[value-js="container-weather"]')
const HTMLWeatherTextParagraph = document.querySelector('[value-js="weather-text-paragraph"]')
const HTMLCityName = document.querySelector('[value-js="city-name"]')
const HTMLTemperatureText = document.querySelector('[value-js="temperature"]')
const HTMLWeatherIconContainer = document.querySelector('[value-js="weather-icon"]')

const setStyles = (dayOrNight, colorWeatherParagraph, colorCityName, colorTemperatureText, colorIcon) => {
    containerWeather.style.backgroundImage = `url('./images/${dayOrNight}.jpg')`
    HTMLWeatherTextParagraph.style.color = `${colorWeatherParagraph}`
    HTMLTemperatureText.style.color = `${colorTemperatureText}`
    HTMLCityName.style.color = `${colorCityName}`
    HTMLWeatherIconContainer.style.backgroundColor = `${colorIcon}`
}

const addTextHTML = (weatherInfo, cityName) => {
        const weatherIcon = weatherInfo.WeatherIcon
        const weatherText = weatherInfo.WeatherText
        const temperature = weatherInfo.Temperature.Metric.Value

        HTMLWeatherTextParagraph.innerText = weatherText
        HTMLCityName.innerText = cityName
        HTMLTemperatureText.innerText = `${temperature}°C`
        HTMLWeatherIconContainer.style.backgroundImage = `url(./icons/${weatherIcon}.svg)`
}

form.addEventListener('submit', async event => {
        event.preventDefault()
        
      try {  
        const city = await getCity(inputCity.value)
        const cityName = city.LocalizedName.toUpperCase()
        const key = city.Key
    
        const weatherInfo = await getWeatherInfo(key)
        const isDayTime = weatherInfo.IsDayTime
        

        isDayTime 
        ? setStyles('day', '#0075BC', '#0075BC', '#3096D4', '#DFF1FB')
        : setStyles('night', 'white', 'white', 'white', '#6A89C6')  

        addTextHTML(weatherInfo, cityName)
      } catch (error) {
          alert('não foi possível obter a cidade')
      }

      form.reset()
})