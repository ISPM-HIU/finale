import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import { apiDomain } from "../../hooks/useHttp";

const SocketTest = () => {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);

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

  return (
    <div>
      <div>Hello everyone</div>
    </div>
  );
};
export default SocketTest;
