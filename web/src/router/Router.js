import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Assistant } from "../components/dashboard/assistant/Assistant";

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
      </Routes>
    </BrowserRouter>
  );
}
