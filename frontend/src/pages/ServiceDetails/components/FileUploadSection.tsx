import { useRef, useState } from "react";

interface FileUploadSectionProps {
  multiple?: boolean;
  acceptedFileType: string;
  onFilesSelected: (files: File[]) => void;
  fileTypeLabel: string;
}

export default function FileUploadSection({
  multiple = false,
  acceptedFileType,
  onFilesSelected,
  fileTypeLabel,
}: FileUploadSectionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onFilesSelected(Array.from(files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      onFilesSelected(Array.from(files));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="">
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileSelect}
        accept={acceptedFileType}
        multiple={multiple}
      />

      <button
        onClick={handleButtonClick}
        className="hover:cursor-pointer w-full px-6 py-4 bg-linear-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        Choose {multiple ? "Files" : "File"}
      </button>

      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 font-medium">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
          isDragging
            ? "border-[#10B981] bg-green-50"
            : "border-gray-300 bg-gray-50"
        }`}
      >
        <svg
          className={`w-16 h-16 mx-auto mb-4 ${
            isDragging ? "text-[#10B981]" : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Drag and drop your {multiple ? "files" : "file"} here
        </p>
        <p className="text-sm text-gray-500">{fileTypeLabel}</p>
      </div>
    </div>
  );
}
