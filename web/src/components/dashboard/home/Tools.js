import Clock from "./Clock";
import { Meteo } from "./Meteo";

export function Tools(){
    return <>
    <div className="tools">
    <div className="bg minimal-rounded text-white  fs-4 fw-bold p-2 mb-2 text-center">
        <Clock/>
    </div>

    <div className="bg minimal-rounded text-white fs-4 fw-bold p-2">
        <Meteo/>
    </div>
    </div>
    
    </>
}