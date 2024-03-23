import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function MenuComponent(props) {
    return <>
        <Link to={props.href}>
            <li className="mb-2 ">
                <div className="menu p-2 py-3 minimal-rounded">
                    <FontAwesomeIcon icon={props.icon} className="me-1" />{props.name}
                </div>
            </li>
        </Link>
    </>
}