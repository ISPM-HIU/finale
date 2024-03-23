import { faHouseChimneyWindow, faPencil, faTrash, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ConfigurableComp(props) {
    return <>
        <div className="mat minimal-rounded position-relative align-items-center">
            <div>
                <FontAwesomeIcon/>
                <span className="fw-bold">{props.modelName}</span>
                <span class="badge text-bg-secondary bg-secondary mx-1">Matériel : {props.material}</span>
                <span class="badge text-bg-success bg-success">Action : {props.action}</span>
            </div>
            <div className="action">
                <button className="rounded-button me-2">
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
                <button className="rounded-button">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    </>
}