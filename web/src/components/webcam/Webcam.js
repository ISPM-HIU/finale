import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import "../../styles/webcam.css"
import axios from "axios";

const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
};

export function WebcamControl() {
    const webcamRef = React.useRef(null);
    const [idModel, setIdModel] = useState("");
    const [nameModel, setNameModel] = useState("")


    const frameLimit = 1;
    const modelDataLimit = 4;
    const url_sign_hand = process.env.REACT_APP_SIGN_HAND_URL;

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
     * Capture the image caught by the webcam and do some action
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
            console.log("NOt enough data")
        }

    }

    /**
     * Function to create and train the model
     */
    const captureModel = React.useCallback(
        async () => {
            for (let index = 0; index < modelDataLimit; index++) {
                console.log(`${index} has passed`)
                const imageSrc = webcamRef.current.getScreenshot();
                var file = null;

                if (imageSrc) {
                    file = dataURLtoFile(imageSrc, `${nameModel}_${idModel}_${index}.jpeg`); // URL of the image
                    var url = URL.createObjectURL(file),
                        form_data = new FormData()
                    
                    form_data.append('img', file)
                    form_data.append('number_model',0)
                    form_data.append('model_name',nameModel)

                    axios.post(url_sign_hand + "/create-model", form_data)
                        .then(e => {
                            console.log(e)
                        })
                        .catch(e => {
                            console.log(e)
                        })
                }
                await new Promise(r => setTimeout(r, 1000));
            }
            axios.get(url_sign_hand+"/create-dataset").then(e=>{console.log(e.data)})
            axios.get(url_sign_hand+"/train-classifier").then(e=>{console.log(e.data)})
            
        }, [webcamRef]
    )

    // Callback used for useEffect
    const initCapture = React.useCallback(
        (node) => {
            if (webcamRef.current) { }
            if (node) {
                for (let index = 0; index < frameLimit; index++) {
                    captureAndScan() // Action after the reference is initialized
                }
            }
            return () => {
                webcamRef.current = null
            }
        },
        [webcamRef]
    );

    /**
     * Inject to the timeout at useEffect
     */
    function initWebcamComponent() {
        initCapture(webcamRef)
    }


    useEffect(() => {
        setTimeout(initWebcamComponent, 3000)
    }, [webcamRef])


    return (
        <>
            <div className="webcam-comp">
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    width={500}
                    videoConstraints={videoConstraints}
                    ref={webcamRef}
                />
                <input type="text" name="id" id="id" placeholder="Id model" onChange={(e) => { setIdModel(e.currentTarget.value) }} />
                <input type="text" name="name" id="name" placeholder="Name model" onChange={(e) => { setNameModel(e.currentTarget.value) }} />
                <button onClick={captureModel}>Record</button>
            </div>
        </>
    );
}