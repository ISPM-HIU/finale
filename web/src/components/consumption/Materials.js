import React, {useState, useEffect} from "react";
import { Card, Form } from "react-bootstrap";
import socketIO from "socket.io-client";
import useHttps, { apiDomain } from "../../hooks/useHttp";
export const Materials = ()=>{
    const {http} = useHttps()
    const [socket, setSocket] = useState(null);
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let response = await http.get(`/house/${2}`)
      if(response) {
        setData(response.data)
        let res = response.data
        console.log(res);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // Create a new Socket.IO instance
    const newSocket = socketIO.connect(apiDomain);
    // Set the socket state
    setSocket(newSocket);
    newSocket.on("connect", () => {
      // Set the socket state to null
      console.log("Socket connected");
    });

    // Listen for data from the server
    newSocket.on("update-materials", (data) => {
      // Add the message to the data state
      console.log(data)
      setData(data)
    });

    // Listen for when the server disconnects
    newSocket.on("disconnect", () => {
      // Set the socket state to null
      setSocket(null);
      console.log("Socket disconnected");
    });

    // Clean up the socket when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);
    return(
        <div className="d-flex" style={{gap:'100px'}}>
            <center>
                
            </center>
            <Card style={{ width: '35%'}}>
      <Card.Body>
        <Card.Title>Ampoule 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.led1 ? "Allumer" : "Eteint"}</Card.Subtitle>
        <Card.Text>
          Durée: {data.duration1}
        </Card.Text>
        <Card.Text>
          En kWH: {(6580 * (parseInt(data.duration1)/3600)).toFixed(2) || 0}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
      <Form className="d-flex flex-column">
      <Form.Group className="mb-3 d-flex flex-row gap-20" controlId="exampleForm.ControlInput1">
        <Form.Label>Prix du 1KWH: </Form.Label>
        <Form.Control type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      </Form.Group>
      <Card.Text>{(number * 6580 * (parseInt(data.duration1)/3600)).toFixed(2) || 0} Ar</Card.Text>
    </Form>
      </Card.Footer>
    </Card>
    <Card style={{ width: '35%' }}>
      <Card.Body>
        <Card.Title>Ampoule 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.led2 ? "Allumer" : "Eteint"}</Card.Subtitle>
        <Card.Text>
          Durée: {data.duration2}
        </Card.Text>
        <Card.Text>
          En kWH: {6580 * (parseInt(data.duration2)/3600).toFixed(2) || 0}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
      <Form className="d-flex flex-column">
      <Form.Group className="mb-3 d-flex flex-row gap-20" controlId="exampleForm.ControlInput1">
        <Form.Label>Prix du 1KWH: </Form.Label>
        <Form.Control type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)} />
      </Form.Group>
      <Card.Text>{(number2 * 6580 * (parseInt(data.duration2)/3600)).toFixed(2) || 0} Ar</Card.Text>
    </Form>
      </Card.Footer>
    </Card>
        </div>
    )
}