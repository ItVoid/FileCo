import { useParams, useNavigate } from "react-router-dom";
import appContent from "../utilities/AppContent";

const colors = {
  border: "#10B981",
  gradient: "from-[#10B981] to-[#059669]",
  hover: "#10B981",
};

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the service across all categories
  let foundService = null;
  let categoryName = "";

  for (const category of appContent()) {
    const service = category.services.find((s) => s.id === id);
    if (service) {
      foundService = service;
      categoryName = category.name;
      break;
    }
  }

  if (!foundService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[#10B981] transition-colors"
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
          Back to Services
        </button>

        {/* Service Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md">
              {foundService.icon ? (
                <img
                  src={
                    new URL(
                      `../assets/icons/${foundService.icon}`,
                      import.meta.url
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
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {categoryName}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1F2632]">
                {foundService.serviceName}
              </h1>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {foundService.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Get Started
              </h2>
              <button
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                onClick={() => {
                  // Placeholder for service action
                  alert(`Starting ${foundService.serviceName} service...`);
                }}
              >
                Use {foundService.serviceName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
