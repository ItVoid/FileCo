export type ValidationError = {
  fileName: string;
  message: string;
};

export type ValidationConfig = {
  maxFileSizeMB?: number;
  maxFileCount?: number;
};

const DEFAULT_CONFIG: Required<ValidationConfig> = {
  maxFileSizeMB: 50,
  maxFileCount: 20,
};

const PDF_MIME_TYPE = "application/pdf";

const BYTES_PER_KB = 1024;

const BYTES_PER_MB = BYTES_PER_KB * 1024;
/**
 * 
    a file header: block of supplemental data located at the very beginning 
    of a file that contains essential information about the file's format and contents. 
    When a program "reads the file header," it is scanning these initial bytes to identify 
    what kind of file it is dealing with and how to process the data that follows.
 *   
 */
const readFileHeader = (file: File, bytes: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    // creating a file reader to read file contents
    const reader = new FileReader();
    // when reading completes successfully
    reader.onload = () => {
      // convert raw binary to array of bytes
      const arr = new Uint8Array(reader.result as ArrayBuffer);
      // bytes -> chararacters -> string
      resolve(String.fromCharCode(...arr));
    };
    // reject the promise if reading fails
    reader.onerror = reject;
    // read only the first N bytes of the file
    reader.readAsArrayBuffer(file.slice(0, bytes));
  });
};

export const validatePdfFile = async (
  file: File,
  config: ValidationConfig = {},
): Promise<string | null> => {
  const { maxFileSizeMB } = { ...DEFAULT_CONFIG, ...config };
  const maxFileSizeBytes = maxFileSizeMB * BYTES_PER_MB;

  if (file.type !== PDF_MIME_TYPE) {
    return `Invalid file type. Expected PDF but got ${file.type || "unknown"}`;
  }

  if (file.size === 0) {
    return "File is empty";
  }

  if (file.size > maxFileSizeBytes) {
    return `File size (${(file.size / 1024 / 1024).toFixed(2)} MB) exceeds maximum (${maxFileSizeMB} MB)`;
  }

  const header = await readFileHeader(file, 5);
  if (header !== "%PDF-") {
    return "File does not appear to be a valid PDF";
  }

  return null;
};

export const checkDuplicate = <T extends { file: File }>(
  existingFiles: T[],
  newFile: File,
): boolean => {
  // Determines whether the specified callback function
  // returns true for any element of an array
  // once true is found, it breaks.
  return existingFiles.some((ex) => {
    return ex.file.name === newFile.name && ex.file.size === newFile.size;
  });
};

export const checkFileCount = (
  currentCount: number,
  newCount: number,
  maxCount: number = DEFAULT_CONFIG.maxFileCount,
): string | null => {
  if (currentCount + newCount > maxCount) {
    return `Cannot uploaded more than ${maxCount}`;
  }
  return null;
};
