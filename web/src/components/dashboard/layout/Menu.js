import { faCouch, faHouse, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { MenuComponent } from "../menu/MenuComponent";
import { faOdnoklassniki } from "@fortawesome/free-brands-svg-icons";
import { Tools } from "../home/Tools";

export function Menu(props) {
    return <>
        <div className="position-relative">
            <div className="col-md-2 bg min-vh-100 p-2 pt-5 position-fixed">
                <h2>Logo be</h2>
                <hr style={{color:"white"}}/>
                <ul className="p-2">
                    <MenuComponent name={"Home"} icon={faHouse} href={"/dashboard"}/>
                    <MenuComponent name={"Materials"} icon={faCouch} href={"/dashboard/assistant"}/>
                    <MenuComponent name={"Assistant"} icon={faUniversalAccess} href={"/dashboard/assistant"}/>
                    <MenuComponent name={"House"} icon={faOdnoklassniki} href={"/dashboard/assistant"}/>
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