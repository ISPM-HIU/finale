import { WebcamControl } from "../../webcam/Webcam";
import { Menu } from "../layout/Menu";

export function Assistant() {
    return <>
        <Menu>
            <h1>Assistant </h1>
            <div>
                <p>
                    Pour faciliter l'accessibilité à l'application.
                </p>
                <WebcamControl />
            </div>
        </Menu>
    </>
}