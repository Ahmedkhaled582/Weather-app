const apiKey = '8dd1d2c9ede5b4311682e11527773a8b'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=matric&q='


let searchbox = document.querySelector('.search input')
let searchbutton = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weather-icon')




async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(res.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
    else{
        let data = await res.json()


        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    
        if(data.weather[0].main == "Clodes"){
            weatherIcon.src = "img/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png"
        }
    
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = 'none'

    
    }
  
}

searchbutton.addEventListener('click' , function(){
    checkWeather(searchbox.value)
    searchbox.value = ''
})



