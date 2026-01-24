import { useState } from "react";
import FileUploadSection from "../components/FileUploadSection";

interface PdfFile {
  id: string;
  file: File;
  preview: string;
}

export default function MergePdfWorkflow() {
  const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleFilesSelected = (files: File[]) => {
    const newPdfFiles: PdfFile[] = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));
    setPdfFiles((prev) => [...prev, ...newPdfFiles]);
  };

  const handleRemoveFile = (id: string) => {
    setPdfFiles((prev) => prev.filter((pdf) => pdf.id !== id));
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // handleDrop function handles the reordering of PDF files
  // when a user drops a dragged item onto a new position.
  // dropIndex: file position's index
  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    // shallow copy to avoid direct state mutation
    const newFiles = [...pdfFiles];
    // files reordering
    const [draggedFile] = newFiles.splice(draggedIndex, 1); // remove
    newFiles.splice(dropIndex, 0, draggedFile); // insert in new index

    setPdfFiles(newFiles);
    setDraggedIndex(null);
  };

  const handleMergePdfs = () => {
    alert("Merge functionality will be implemented soon!");
  };

  return (
    <div className="space-y-8">
      {pdfFiles.length === 0 ? (
        <FileUploadSection
          multiple={true}
          acceptedFileType=".pdf"
          onFilesSelected={handleFilesSelected}
          fileTypeLabel="PDF files only"
        />
      ) : (
        <>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Uploaded Files ({pdfFiles.length})
              </h3>
              <button
                onClick={() =>
                  document
                    .querySelector<HTMLInputElement>('input[type="file"]')
                    ?.click()
                }
                className="hover:cursor-pointer px-4 py-2 text-sm bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors"
              >
                + Add More Files
              </button>
            </div>

            <p className="text-sm text-gray-300 bg-emerald-900/30 border border-emerald-700 rounded-lg p-3 flex items-start gap-2">
              <svg
                className="w-5 h-5 text-[#10B981] mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                To change the order of your PDFs, drag and drop the files as you
                want.
              </span>
            </p>

            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  handleFilesSelected(Array.from(files));
                }
              }}
              accept=".pdf"
              multiple
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pdfFiles.map((pdf, index) => (
                <div
                  key={pdf.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                  className={`relative bg-gray-700 border-2 rounded-lg p-4 cursor-move hover:shadow-lg transition-all ${
                    draggedIndex === index
                      ? "border-[#10B981] opacity-50"
                      : "border-gray-600"
                  }`}
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#10B981] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">
                    {index + 1}
                  </div>

                  <button
                    onClick={() => handleRemoveFile(pdf.id)}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md z-10"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="flex flex-col items-center">
                    <svg
                      className="w-16 h-16 text-red-500 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <path d="M14 2v6h6" />
                      <path
                        fill="white"
                        d="M10.5 13.5h-2v3h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
                      />
                    </svg>
                    <p className="text-xs text-gray-200 font-medium text-center truncate w-full">
                      {pdf.file.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {(pdf.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleMergePdfs}
            disabled={pdfFiles.length < 2}
            className={`hover:cursor-pointer w-full px-6 py-4 font-semibold rounded-lg transition-all transform flex items-center justify-center gap-2 ${
              pdfFiles.length < 2
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-linear-to-r from-[#10B981] to-[#059669] text-white hover:shadow-xl hover:-translate-y-0.5"
            }`}
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Merge PDFs ({pdfFiles.length} files)
          </button>
        </>
      )}
    </div>
  );
}
