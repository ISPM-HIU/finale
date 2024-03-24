import { faBoltLightning, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Wifi(){
    return <>
    <div className="board-card wifi p-3 text-white mx-2 h-full">
            <div className="w-full fw-bold fs-4 mb-2">
                <FontAwesomeIcon icon={faWifi} className="me-2"/>
                Consommation de donnée wifi
            </div>
            <div className="board-body">
                <div>
                    <span className="fw-bold">Nom du WiFi : </span> Redmi 4S
                </div>
                <div>
                    <span className="fw-bold">Nombre de connecté : </span> 4
                </div>
                
            </div>
        </div>
    </>
}