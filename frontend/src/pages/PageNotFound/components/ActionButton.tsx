import { useNavigate } from "react-router-dom";

export default function ActionButton() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      <button
        onClick={() => navigate("/")}
        className="hover:cursor-pointer group px-8 py-4 bg-linear-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Go to Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="hover:cursor-pointer px-8 py-4 bg-gray-800 text-gray-300 font-semibold rounded-xl border-2 border-gray-600 hover:border-[#10B981] hover:text-[#10B981] hover:shadow-lg transition-all duration-300"
      >
        Go Back
      </button>
    </div>
  );
}
