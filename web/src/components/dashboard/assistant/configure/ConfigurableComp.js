import { faHouseChimneyWindow, faPencil, faTrash, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap"
import { WebcamControl } from "../../../webcam/Webcam";

export function ConfigurableComp(props) {
    const url_sign_hand = "http://localhost:5000";
    const [modalShow, setModalShow] = useState(false)
    const [modalEditShow, setModalEditShow] = useState(false)

    const onDelete = (event) => {
        event.preventDefault()
        console.log(event.target.id);
        axios.post(url_sign_hand + "/delete-model", { model_name: event.target.id })
            .then(response => {
                axios.get(url_sign_hand + "/get-all-model")
                    .then(response => {
                        console.log(response.data);
                        const dataArray = Object.values(response.data);
                        console.log(dataArray);
                        props.setMaterial(response.data)
                        setModalShow(false)
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return <>

        <div className="mat minimal-rounded position-relative align-items-center">
            <div>
                <FontAwesomeIcon />
                <span className="fw-bold">{props.modelName}</span>
                <span className="badge text-bg-secondary bg-secondary mx-1">Matériel : {props.material}</span>
                <span className="badge text-bg-success bg-success">Action : {props.action}</span>
            </div>
            <div className="action">

                <button className="rounded-button me-2" onClick={(e) => setModalEditShow(true)} >
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className="rounded-button" onClick={(e) => setModalShow(true)} >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <Modal
                    show={modalShow}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Suppression
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Vous voulez vraiment le supprimer?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={(e) => setModalShow(false)}>Annuler</Button>
                        <Button id={props.modelName} onClick={onDelete}>Valider</Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={modalEditShow}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modification du mouvement enregistrée
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WebcamControl setEdit={true}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={(e) => setModalEditShow(false)}>Annuler</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    </>
}