import { WebcamControl } from "../../webcam/Webcam";
import { Menu } from "../layout/Menu";

export function Assistant() {
    return <>
        <Menu>
            <div className="w-full p-3">
                <h2>Assistant </h2>
                <div>
                    <p>
                        Pour faciliter l'accessibilité à l'application.
                    </p>
                    <WebcamControl />
                </div>
            </div>
        </Menu>
    </>
}