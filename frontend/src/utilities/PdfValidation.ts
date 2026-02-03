export type ValidationError = {
  fileName: string;
  message: string;
};

export type ValidationConfig = {
  maxFileSizeMB?: number;
  maxFileCount?: number;
};

const DEFAULT_CONFIG: Required<ValidationConfig> = {
  maxFileSizeMB: 100,
  maxFileCount: 20,
};

const PDF_MIME_TYPE = "application/pdf";

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
