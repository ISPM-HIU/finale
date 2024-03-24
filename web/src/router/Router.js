import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import SocketTest from "../components/SocketTest/SocketTest";
import { WebcamControl } from "../components/webcam/Webcam";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Assistant } from "../components/dashboard/assistant/Assistant";
import { Configure } from "../components/dashboard/assistant/configure/configure";
import { Consumption } from "../components/consumption/Consumption";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage />
          }
        ></Route>
        <Route path="/webcam"
          element={
              <WebcamControl/>
          }
        ></Route>
        <Route
          path="/socket-test"
          element={
              <SocketTest />
          }
        ></Route>
        <Route path="/webcam"
          element={
              <WebcamControl/>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        ></Route>

        <Route
          path="/dashboard/assistant"
          element={
              <Assistant />
          }
        ></Route>

        <Route
          path="/dashboard/materials"
          element={
              <Configure />
          }
        ></Route>
        <Route
          path="/dashboard/consumption"
          element={
              <Consumption/>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
