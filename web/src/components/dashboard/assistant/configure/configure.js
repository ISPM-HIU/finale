import { useEffect, useState } from "react";
import { Menu } from "../../layout/Menu";
import { ConfigurableComp } from "./ConfigurableComp";
import axios from "axios";

export function Configure() {
    const url_sign_hand = "http://localhost:5000";

    const [material, setMaterial] = useState([]);

    useEffect(() => {
        axios.get(url_sign_hand + "/get-all-model")
            .then(response => {
                const dataArray = Object.values(response.data);
                console.log(dataArray); 
                setMaterial(dataArray); // Set material with the entire array
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Menu>
            <div className="w-full p-3">
                <h2>Configurer votre assistant</h2>
                <p>Vous pouvez voir tous les événements que vous avez attribué à votre assistant.</p>
                <div className="d-flex w-full flex-column">
                    {
                        material.map((val, index) => (
                            <ConfigurableComp key={index} modelName={val.name} action={val.action} material={val.material} id={val.number_model} setMaterial={setMaterial}/>
                        ))
                    }
                </div>
            </div>
        </Menu>
    );
}
