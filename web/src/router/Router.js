import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import SocketTest from "../components/SocketTest/SocketTest";

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
        <Route
          path="/socket-test"
          element={
              <SocketTest />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
