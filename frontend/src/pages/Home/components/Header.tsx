export default function Header() {
  return (
    <div
      id="header"
      className="w-full h-14 sm:h-16 md:h-20 lg:h-24 bg-gray-900 flex items-center justify-between px-4 sm:px-6 md:px-8 overflow-hidden border-b border-gray-800"
    >
      <h1
        onClick={() => (window.location.href = "/")}
        className="font-sans text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#10B981] whitespace-nowrap cursor-pointer"
      >
        <span className="text-gray-100">File</span>Co
      </h1>
    </div>
  );
}
