import { Menu } from "../../layout/Menu";
import { ConfigurableComp } from "./ConfigurableComp";

export function Configure() {
    return <>
        <Menu>
            <div className="w-full p-3">
                <h2>Configurer votre assistant</h2>
                <p>Vous pouvez voir tous les événements que vous avez attribué à votre assistant.</p>
                <div className="d-flex w-full flex-column">
                    <ConfigurableComp modelName={"Main gauche"} action={"Ouvrir"} material={"Fenêtre 1"} />
                </div>
            </div>
        </Menu>
    </>
}