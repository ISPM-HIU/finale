import { faCouch, faHouse, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { MenuComponent } from "../menu/MenuComponent";
import { faOdnoklassniki } from "@fortawesome/free-brands-svg-icons";
import { Tools } from "../home/Tools";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

export function Menu(props) {
    return <>
        <div className="position-relative">
            <div className="col-md-2 bg min-vh-100 p-2 pt-5 position-fixed">
                <h2 style={{color:"white"}}>SmartHome</h2>
                <hr style={{color:"white"}}/>
                <ul className="p-2">
                    <MenuComponent name={"Home"} icon={faHouse} href={"/dashboard"}/>
                    <MenuComponent name={"Materials"} icon={faCouch} href={"/dashboard/materials"}/>
                    <MenuComponent name={"Assistant"} icon={faUniversalAccess} href={"/dashboard/assistant"}/>
                    <MenuComponent name={"Consommation"} icon={faChartBar} href={"/dashboard/consumption"}/>
                </ul>
            </div>
            <div className="col-md-10 position-fixed end-0 overscroll">
            {
                props.children
            }
            </div>
        </div>
    </>
}