import appContent from "../utilities/AppContent";
import { v4 as uuidv4 } from "uuid";

const categoryColors = [
  {
    border: "#10B981",
    gradient: "from-[#10B981] to-[#059669]",
    hover: "#10B981",
  },
  {
    border: "#10B981",
    gradient: "from-[#10B981] to-[#059669]",
    hover: "#10B981",
  },
  {
    border: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    hover: "#8B5CF6",
  },
  {
    border: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    hover: "#8B5CF6",
  },
  {
    border: "#EF4444",
    gradient: "from-[#EF4444] to-[#DC2626]",
    hover: "#EF4444",
  },
  {
    border: "#EF4444",
    gradient: "from-[#EF4444] to-[#DC2626]",
    hover: "#EF4444",
  },
];

export default function Services() {
  return (
    <div
      id="services-container"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 space-y-16"
    >
      {appContent().map((category, categoryIndex) => {
        const colors = categoryColors[categoryIndex % categoryColors.length];

        return (
          <div key={uuidv4()} className="w-full">
            <div
              className="mb-8 pb-4 border-b-2"
              style={{ borderColor: colors.border }}
            >
              <h2 className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2632]">
                {category.name}
              </h2>
            </div>
            <div
              className={`${
                category.services.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              } gap-5 md:gap-6 lg:gap-7`}
            >
              {category.services.map((service) => (
                <div
                  key={uuidv4()}
                  className={`group bg-white rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent transform hover:-translate-y-1 ${
                    category.services.length === 1 ? "w-full max-w-xl" : ""
                  }`}
                  style={{
                    ["--hover-border-color" as any]: colors.hover,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = colors.border)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "transparent")
                  }
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {service.icon ? (
                        <img
                          src={
                            new URL(
                              `../assets/icons/${service.icon}`,
                              import.meta.url
                            ).href
                          }
                          alt={service.serviceName}
                          className="w-6 h-6"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">
                          {service.serviceName.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-[#1F2632]">
                      {service.serviceName}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
