import { useNavigate } from "react-router-dom";

export default function HelpfulLinks() {
  const navigate = useNavigate();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-500 mb-4">Need help finding something?</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => navigate("/")}
          className="hover:cursor-pointer text-sm text-[#10B981] hover:text-[#059669] font-medium hover:underline transition-colors"
        >
          Browse All Services
        </button>
      </div>
    </div>
  );
}
