import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../../styles/webcam.css"
import axios from "axios";
import { Link } from "react-router-dom";

const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
};

export function WebcamControl(props) {
    const webcamRef = React.useRef(null);
    const [idModel, setIdModel] = useState("");
    const [nameModel, setNameModel] = useState("")
    const [message, setMessage] = useState("")
    const [material, setMaterial] = useState("fenetre1");
    const [action, setAction] = useState("ouvrir")
    const [edit, setEdit] = useState(false)
    const [lengthLabel, setLengthLabel] = useState(0)
    const [numModel, setNumModel] = useState(null)
    const frameLimit = 8;
    const modelDataLimit = 10;
    const url_sign_hand = "http://localhost:5000";

    /**
     * Convert the dataURL into a file
     * @param {*} dataurl Base64 data
     * @param {*} filename name of the file
     * @returns 
     */
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    /**
     * Get length of the last model
     */
    

    /**
     * Capture the image caught by the webcam and fetch the API data
     */
    function captureAndScan() {
        try {
            var imageSrc = webcamRef.current.getScreenshot();
            var file = null;

            if (imageSrc) {
                file = dataURLtoFile(imageSrc, "image.jpeg"); // URL of the image
                var url = URL.createObjectURL(file),
                    form_data = new FormData()
                form_data.append('img', file)
                console.log(imageSrc)
                axios.post(url_sign_hand + "/inference-classifier", form_data, {

                })
                    .then(e => {
                        console.log(e)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        } catch (error) {
            console.log("Not enough data")
        }

    }


    /**
     * Function to create and train the model
     */
    const captureModel = React.useCallback(
        async () => {
            setMessage("Essayer different position du caméra si possible")
            for (let index = 0; index < modelDataLimit; index++) {
                console.log(`${index} has passed`)
                const imageSrc = webcamRef.current.getScreenshot();
                var file = null;

                if (imageSrc) {
                    file = dataURLtoFile(imageSrc, `${nameModel}_${idModel}_${index}.jpeg`); // URL of the image
                    console.log("File object");
                    console.log(file)
                    var url = URL.createObjectURL(file),
                        form_data = new FormData()

                    form_data.append('img', file)
                    form_data.append('number_model', numModel)
                    form_data.append('model_name', nameModel)
                    form_data.append('action', action + " " + material)
                    axios.post(url_sign_hand + "/create-model", form_data)
                        .then(e => {
                            console.log(e)
                            setLengthLabel(e => {
                                return e + 1
                            })
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }

                await new Promise(r => setTimeout(r, 2000));

            }
            setMessage("")
            axios.get(url_sign_hand + "/create-dataset").then(e => {
                console.log(e.data)
                axios.get(url_sign_hand + "/train-classifier").then(e => {
                    console.log(e.data)
                })
            })

        }, [webcamRef, message, nameModel, lengthLabel,action,material]
    )

    // Callback used for useEffect
    const initCapture = React.useCallback(
        async (node) => {
            if (webcamRef.current) { }
            setMessage("En cours de capture")
            if (node) {
                for (let index = 0; index < frameLimit; index++) {
                    captureAndScan() // Action after the reference is initialized
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
            setMessage("")
            return () => {
                webcamRef.current = null
            }
        },
        [webcamRef]
    );

    /**
     * Inject to the timeout at useEffect
     */
    async function captureScreenshot() {
        await initCapture(webcamRef)
    }

    /**
     * Change the state of edit
     */
    function controlEdit() {
        setEdit(e => {
            return !e
        })
    }

    const updateModel = React.useCallback(
        async () => {
            setMessage("Essayer different position du caméra si possible")
            for (let index = 0; index < modelDataLimit; index++) {
                console.log(`${index} has passed`)
                const imageSrc = webcamRef.current.getScreenshot();
                var file = null;

                if (imageSrc) {
                    file = dataURLtoFile(imageSrc, `${nameModel}_${idModel}_${index}.jpeg`); // URL of the image
                    var url = URL.createObjectURL(file),
                        form_data = new FormData()

                    form_data.append('img', file)
                    form_data.append('number_model', lengthLabel)
                    form_data.append('model_name', nameModel)
                    form_data.append('action', action + " " + material)

                    console.log(form_data)
                    axios.put(url_sign_hand + "/update-model", form_data)
                        .then(response => {
                            console.log(response)
                            setLengthLabel(e => {
                                return e + 1
                            })
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });

                }

                await new Promise(r => setTimeout(r, 2000));

            }
            axios.get(url_sign_hand + "/create-dataset").then(e => {
                console.log(e.data)
                axios.get(url_sign_hand + "/train-classifier").then(e => {
                    console.log(e.data)
                })
            })
            setMessage("Modification effectué")
            await new Promise(r => setTimeout(r, 2000));
            setMessage("")

        }, [webcamRef, message, nameModel, lengthLabel,,action,material]
    )

    /**
     * Used by default if we need to add some model
     * @returns 
     */
    function addModelComp() {
        if (edit) {
            return <div>
                <div style={{
                    display: "flex"
                }} className="justify-content-center">
                    <div class="mb-2 col-md-3 mx-1">
                        <input type="text" className="form-control" id="nameLabel" placeholder="Entrer le numero du modèle"
                            value={numModel} onChange={(e) => { setNumModel(e.currentTarget.value) }} />
                    </div>
                    <div class="mb-2 col-md-3 mx-1">
                        <input type="text" className="form-control" id="nameLabel" placeholder="Entrer le nom du modèle"
                            value={nameModel} onChange={(e) => { setNameModel(e.currentTarget.value) }} />
                    </div>
                    <div class="mb-2 col-md-3 mx-1">
                        <select class="form-select form-select-sm py-2" aria-label="Selectionner le materiel" value={material} onChange={(e) => { setMaterial(e.currentTarget.value) }} >
                            <option value="fenetre1">Fenêtre 1</option>
                            <option value="fenetre2">Fenêtre 2</option>
                            <option value="porte1">Porte 1</option>
                            <option value="porte2">Porte 2</option>
                            <option value="lampe1">Lampe 1</option>
                            <option value="lampe2">Lampe 2</option>

                        </select>
                    </div>
                    <div class="mb-2 col-md-3 mx-1">
                        <select class="form-select form-select-sm py-2" aria-label="Selectionner l'action" value={action} onChange={(e) => { setAction(e.currentTarget.value) }} >
                            {
                                material.includes("fenetre") || material.includes("porte") ?
                                    <>
                                        <option value={"ouvrir"}>Ouvrir</option>
                                        <option value={"fermer"}>Fermer</option>
                                    </> :
                                    <>
                                        <option value={"allumer"}>Allumer</option>
                                        <option value={"eteindre"}>Éteindre</option>
                                    </>
                            }
                        </select>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success me-3" onClick={captureModel}>Ajouter un nouveau signe</button>
                <button type="submit" className="btn btn-danger me-3" onClick={controlEdit}>Retour</button>
                </div>
            </div>
        } else {
            return <>
                <div className="d-flex px-3 justify-content-center">
                    <button type="submit" className="btn btn-primary col-md-4" onClick={captureScreenshot}>Capturer le mouvement</button>
                    <button type="submit" className="btn btn-success col-md-4 mx-2" onClick={controlEdit}>Ajouter un nouveau mouvement</button>
                </div>

            </>
        }
    }

    

    return (
        <>
            <div className="w-full p-3">

                <div className="d-flex justify-content-center w-100">
                    <div className="webcam-comp position-relative">

                        <Webcam
                            audio={false}
                            screenshotFormat="image/jpeg"
                            width={500}
                            videoConstraints={videoConstraints}
                            ref={webcamRef}
                            className="z-0"
                        />
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            className="position-absolute top-0 z-3 text-white text-center fw-bold fs-3"
                        >
                            {
                                message
                            }
                        </div>
                    </div>
                </div>
                {
                    props.setEdit ?
                        <>
                            <div>
                                <div style={{
                                    display: "flex"
                                }}>
                                    <div class="mb-2 col-md-3 me-1">
                                        <input type="text" className="form-control" id="nameLabel" placeholder="Entrer le nom du modèle"
                                            value={nameModel} onChange={(e) => { setNameModel(e.currentTarget.value) }} />
                                    </div>
                                    <div class="mb-2 col-md-3 me-1">
                                        <select class="form-select form-select-sm" aria-label="Selectionner le materiel" value={material} onChange={(e) => { setMaterial(e.currentTarget.value) }} >
                                            <option value="fenetre 1">Fenêtre 1</option>
                                            <option value="fenetre 2">Fenêtre 2</option>
                                            <option value="porte 1">Porte 1</option>
                                            <option value="porte 2">Porte 2</option>
                                            <option value="lampe 1">Lampe 1</option>
                                            <option value="lampe 2">Lampe 2</option>

                                        </select>
                                    </div>
                                    <div class="mb-2 col-md-3 me-1">
                                        <select class="form-select form-select-sm" aria-label="Selectionner l'action" value={action} onChange={(e) => { setAction(e.currentTarget.value) }} >
                                            {
                                                material.includes("fenetre") || material.includes("porte") ?
                                                    <>
                                                        <option value={"ouvrir"}>Ouvrir</option>
                                                        <option value={"fermer"}>Fermer</option>
                                                    </> :
                                                    <>
                                                        <option value={"allumer"}>Allumer</option>
                                                        <option value={"eteindre"}>Éteindre</option>
                                                    </>
                                            }
                                        </select>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-success me-3" onClick={updateModel}>Modifier la modèle</button>
                            </div>
                        </>
                        :
                        addModelComp()
                }
            </div>
        </>
    );
}