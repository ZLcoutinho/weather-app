const APIKey = 'hKTDuAvTRvRLrHAPfeXJM6n0qJn6KOBr'
const key = []
const getCity = async cityName => {
    const [city] = await (await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`)).json()
    return city
}

const getWeatherInfo = async key => {
    const [weatherInfo] = await (await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKey}&language=pt-br`)).json()
    return weatherInfo
}
