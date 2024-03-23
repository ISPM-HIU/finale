import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import { WebcamControl } from "../components/webcam/Webcam";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Assistant } from "../components/dashboard/assistant/Assistant";
import { Configure } from "../components/dashboard/assistant/configure/configure";

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
          path="/dashboard/assistant/configure"
          element={
              <Configure />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
