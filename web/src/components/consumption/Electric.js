import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Materials } from "./Materials";

export function Electric(){
    return <>
        <div className="board-card elec p-3 text-white h-full text-center" style={{marginBottom:"20px"}}>
            <div className="w-full fw-bold fs-4">
                <FontAwesomeIcon icon={faBoltLightning} className="me-2"/>
                Consommation d'éléctricité
            </div>
            <div className="board-body">
                <div>
                    <span className="fw-bold">Nombre d'appareil éléctronique : </span> 3
                </div>
            </div>
        </div>
        <Materials />
    </>
}