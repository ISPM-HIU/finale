import Webcam from "react-webcam";
import { WebcamControl } from "../../../webcam/Webcam";
import { Menu } from "../../layout/Menu";
import { ConfigurableComp } from "./ConfigurableComp";

export function Configure(){
    return <>
        <Menu>
            <h1>Configurer votre assistant</h1>
            <p>Vous pouvez voir tous les événements que vous avez attribué à votre assistant.</p>
            <div className="d-flex w-full flex-column">
                <ConfigurableComp modelName={"Main gauche"} action={"Ouvrir"} material={"Fenêtre 1"}/>
            </div>
        </Menu>
    </>
}