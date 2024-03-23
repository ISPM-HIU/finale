import { faCloud, faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Meteo(){
    return <>
    <FontAwesomeIcon icon={faTemperatureQuarter} className="te-1"/> 36°C
    <hr/>
    <FontAwesomeIcon icon={faCloud}/> Cloudy
    </>
}