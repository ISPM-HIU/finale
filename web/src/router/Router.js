import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";

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
      </Routes>
    </BrowserRouter>
  );
}
