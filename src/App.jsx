import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import OwnerPage from "./Pages/OwnerPage";

export default function App() {
  return (
    <div className="bg-orange-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerPage />} />
      </Routes>
    </div>
  );
}