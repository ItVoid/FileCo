import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import appContent from "../../utilities/AppContent";
import { MergePdfWorkflow } from "./components";

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // TO BE FIXED
  // This is written to fix the scrolled
  // protect pdf page
  // but it is a weak ass solution
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  let foundService = null;

  for (const category of appContent()) {
    const service = category.services.find((service) => service.id === id);
    if (service) {
      foundService = service;
      break;
    }
  }

  if (!foundService) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="hover:cursor-pointer mb-8 flex items-center gap-2 text-gray-600 hover:text-[#10B981] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md">
              {foundService.icon ? (
                <img
                  src={
                    new URL(
                      `../../assets/icons/${foundService.icon}`,
                      import.meta.url,
                    ).href
                  }
                  alt={foundService.serviceName}
                  className="w-10 h-10"
                />
              ) : (
                <span className="text-white text-2xl font-bold">
                  {foundService.serviceName.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1F2632]">
                {foundService.serviceName}
              </h1>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {foundService.description}
              </p>
            </div>

            {foundService.uiType === "arrange" && <MergePdfWorkflow />}

            {foundService.uiType === "direct" && (
              <div className="text-center text-gray-500 py-8">
                Direct upload workflow will be implemented soon.
              </div>
            )}

            {foundService.uiType === "configure" && (
              <div className="text-center text-gray-500 py-8">
                Configure workflow will be implemented soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
