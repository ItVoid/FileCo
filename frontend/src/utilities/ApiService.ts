
/**
 * Merges multiple PDF files into a single PDF document.
 * 
 * @param files - An array of File objects representing the PDF files to merge.
 * @returns A Promise that resolves to a Blob containing the merged PDF file.
 * @throws {Error} Throws an error if the merge request fails with the message "Failed to merge PDFs, please try again."
 * 
 * @example
 * const files = [file1, file2, file3];
 * const mergedPdf = await mergePdf(files);
 * // Use the mergedPdf Blob to download or process the result
 */
export const mergePdf = async (files: File[]) => {
  const formData = new FormData();

  // append files to the form data
  files.forEach((file) => {
    formData.append("file", file);
  });

  // submit files
  const res = await fetch("http://localhost:3000/manage-pdf/merge", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to merge PDFs, please try again.");
  }

  // receive the resulted merged PDF
  const blob = await res.blob();
  return blob;
};
