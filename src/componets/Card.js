import React from "react";
import Spinner from "./Spinner";


const Card = ({loadingData, showData, weather, forecast})=> {

    var today = new Date()
    var day = today.getDate()
    var month = today.getMonth() +1
    var year = today.getFullYear()
    var date = day + '/' + month + '/' + year


    var url = ""
    var iconUrl = ""

    var iconurl3 = ""
    var iconurl6 = ""
    var iconurl9 = ""

    var forecastDate3 = ""
    var forecastDate6 = ""
    var forecastDate9 = ""

   if(loadingData) {
    return <Spinner/>
   }
   
   if(showData){
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"

        iconurl3 = url + forecast.list[1].weather[0].icon + ".png"
        iconurl6 = url + forecast.list[2].weather[0].icon + ".png"
        iconurl9 = url + forecast.list[3].weather[0].icon + ".png"

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)
    }

    return(
      <div className="mt-5"> 
        {
            showData === true ? (

                 <div className="container">
                    <div className="card mb-3 mx-auto bg-dark text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className="card-date">{date}</p>
                                <h1 className="card-temp">{(weather.main.temp -273.15).toFixed(1)}°C</h1>
                                <p className="card-desc"><img src= {iconUrl} alt="icon"/> {weather.weather[0].description} </p>
                                <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1600" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Temperatura maxima: {(weather.main.temp_max -273.15).toFixed(1)} °C </h5>
                                    <h5 className="card-text">Temperatura minima: {(weather.main.temp_min -273.15).toFixed(1)} °C </h5>
                                    <h5 className="card-text">Sensacion Termica: {(weather.main.feels_like -273.15).toFixed(1)} °C </h5>
                                    <h5 className="card-text">Humedad: {weather.main.humidity} % </h5>
                                    <h5 className="card-text">Velocidad del viento: {weather.wind.speed} m/s </h5>
                                </div>
                                <hr/>
                            <div className="row mt-4">
                                <div className="col">
                                <p>{forecastDate3} hs</p>
                                <p className="description"><img src={iconurl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                <p className="temp">{(forecast.list[1].main.temp -273.15).toFixed(1)}°C</p>
                                </div>

                                <div className="col">
                                <p>{forecastDate6} hs</p>
                                <p className="description"><img src={iconurl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                <p className="temp">{(forecast.list[2].main.temp -273.15).toFixed(1)}°C</p>
                                </div>   

                                <div className="col">
                                <p>{forecastDate9} hs</p>
                                <p className="description"><img src={iconurl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                <p className="temp">{(forecast.list[3].main.temp -273.15).toFixed(1)}°C</p>
                                </div>


                            </div>



                            </div>
                        </div>
                    </div>
                 </div>   

            ) : (
                <h2 className="text-light">Sin datos</h2>
            )
        }
      
      
      </div>
    )
}

export default Card;