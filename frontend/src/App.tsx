import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ServiceDetails } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-container" className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
