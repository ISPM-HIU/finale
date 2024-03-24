import { faCloud, faCloudSun, faSun, faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

export function Meteo(props) {
    const [weatherData, setWeatherData] = useState({})

    async function getWeather() {  
        const data = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=-18.9137&longitude=47.5361&current=temperature_2m,weather_code,cloud_cover&forecast_days=1")
            .catch(e=>console.log(e))
        if(data){
            const json = await data.data
            return json
        } else return 0
    }

    useEffect(async() => {
        var data =await getWeather();

        setWeatherData(data)
    }, [weatherData])

    function getValueCloud() {
        if (weatherData.current) {
            if (weatherData.current.cloudCover >= 100) {
                return <>
                    <FontAwesomeIcon icon={faCloud} />Très nuageux
                </>
            } else if (weatherData.current.cloudCover >= 50) {
                return <>
                    <FontAwesomeIcon icon={faCloudSun} />Peu nuageux
                </>
            } else {
                return <>
                    <FontAwesomeIcon icon={faSun} />Ensoleillé
                </>
            }
        }
    }
    return <>
        <FontAwesomeIcon icon={faTemperatureQuarter} className="te-1" /> {weatherData.current ? weatherData.current.temperature_2m : ""}°C
        <hr />
        {
            getValueCloud()
        }
    </>
}