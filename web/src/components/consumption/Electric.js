import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Electric(){
    return <>
        <div className="board-card elec p-3 text-white h-full">
            <div className="w-full fw-bold fs-4">
                <FontAwesomeIcon icon={faBoltLightning} className="me-2"/>
                Consommation d'éléctricité
            </div>
            <div className="board-body">
                <div>
                    <span className="fw-bold">Nombre d'appareil éléctronique : </span> 4
                </div>
            </div>
        </div>
    </>
}