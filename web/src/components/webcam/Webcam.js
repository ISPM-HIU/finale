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

export function WebcamControl() {
    const webcamRef = React.useRef(null);
    const [idModel, setIdModel] = useState("");
    const [nameModel, setNameModel] = useState("")
    const [message, setMessage] = useState("")
    const [material, setMaterial] = useState("");
    const [action, setAction] = useState("")
    const [edit, setEdit] = useState(false)
    const [lengthLabel,setLengthLabel] = useState(-1)

    const frameLimit = 8;
    const modelDataLimit = 20;
    const url_sign_hand = "http://135.125.191.198:5000";

    /**
     * Convert the dataURL into a file
     * @param {*} dataurl 
     * @param {*} filename 
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
    function getLengthLabel(){
        axios.get(url_sign_hand+"/get-last-model")
        .then(e=>{
            setLengthLabel(parseInt(e.data))
        })
    }

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
                    var url = URL.createObjectURL(file),
                        form_data = new FormData()

                    form_data.append('img', file)
                    form_data.append('number_model', lengthLabel)
                    form_data.append('model_name', nameModel)

                    axios.post(url_sign_hand + "/create-model", form_data)
                        .then(e => {
                            console.log(e)
                            setLengthLabel(e=>{
                                return e+1
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

        }, [webcamRef, message, nameModel,lengthLabel]
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

    useEffect(() => {
        getLengthLabel()
    }, [webcamRef])


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
                edit ?
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
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-2 col-md-3 me-1">
                                <select class="form-select form-select-sm" aria-label="Selectionner l'action" value={action} onChange={(e) => { setAction(e.currentTarget.value) }} >
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success me-3" onClick={captureModel}>Ajouter un nouveau signe</button>
                        <button type="submit" className="btn btn-primary me-3" onClick={controlEdit}>Retour</button>
                    </div>
                    :
                    <>
                        <div className="container d-flex px-3">
                            <button type="submit" className="btn btn-primary col-md-4" onClick={captureScreenshot}>Capturer le mouvement</button>
                            <button type="submit" className="btn btn-success col-md-4 mx-2" onClick={controlEdit}>Ajouter un nouveau mouvement</button>
                            
                        </div>

                    </>
            }
        </div>
        </>
    );
}