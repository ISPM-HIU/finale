import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import { WebcamControl } from "../components/webcam/Webcam";

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
      </Routes>
    </BrowserRouter>
  );
}
