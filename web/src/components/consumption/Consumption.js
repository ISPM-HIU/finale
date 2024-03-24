import { Menu } from "../dashboard/layout/Menu";
import { Electric } from "./Electric";
import { Wifi } from "./Wifi";

export function Consumption() {
    return <>
        <Menu>
            <div className="w-full p-3">
                <h2>Consommation</h2>
                <p>C'est ici que vous trouverer les details des consommations que ce soit de donnée WiFi ou éléctrique.</p>

                <div className="d-flex">
                    <Electric />
                    <Wifi />
                </div>
            </div>
        </Menu>
    </>
}