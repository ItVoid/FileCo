import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ServiceDetails, PageNotFound } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-container" className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ":id" is caught by useParams<{ id: string }>(); */}
          <Route path="/service/:id" element={<ServiceDetails />} />
          {/* "*" will catch "/404" */}
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
