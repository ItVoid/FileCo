import appContent from "@/utilities/AppContent";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div
      id="services-container"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 space-y-16"
    >
      {appContent().map((category) => {
        return (
          <div key={uuidv4()} className="w-full">
            <div className="mb-8 pb-4 border-b-2 border-emerald-500">
              <h2 className="text-center font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">
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
                  className={`group bg-gray-800 rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-emerald-500 transform hover:-translate-y-1 ${
                    category.services.length === 1 ? "w-full max-w-xl" : ""
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {service.icon ? (
                        <img
                          src={
                            new URL(
                              `../../../assets/icons/${service.icon}`,
                              import.meta.url,
                            ).href
                          }
                          alt={service.serviceName}
                          className="w-8 h-8"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">
                          {service.serviceName.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-100">
                      {service.serviceName}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
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
