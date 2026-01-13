type AppContent = {
  name: string;
  services: {
    id: string;
    serviceName: string;
    description: string;
    icon: string;
  }[];
};

export default function appContent(): AppContent[] {
  return [
    {
      name: "Manage PDF",
      services: [
        {
          id: "merge-pdf",
          serviceName: "Merge PDF",
          description: "Combine PDFs with the desired order.",
          icon: "merge.png",
        },
        {
          id: "split-pdf",
          serviceName: "Split PDF",
          description:
            "Separate PDF pages into multiple ones based on your need.",
          icon: "partition.png",
        },
        {
          id: "remove-pages",
          serviceName: "Remove Pages",
          description: "Remove selected pages from a PDF file.",
          icon: "delete-file.png",
        },
        {
          id: "organize-pdf",
          serviceName: "Organize PDF",
          description: "Sort, delete, or add PDF pages at your convenience.",
          icon: "sort-data.png",
        },
      ],
    },
    {
      name: "Fix PDF",
      services: [
        {
          id: "compress-pdf",
          serviceName: "Compress PDF",
          description: "Reduce & optimize PDF size keeping maximal quality.",
          icon: "minimize.png",
        },
        {
          id: "repair-pdf",
          serviceName: "Repair PDF",
          description: "Repair & recover data from a corrupted PDF file.",
          icon: "file.png",
        },
      ],
    },
    {
      name: "Convert to PDF",
      services: [
        {
          id: "jpg-to-pdf",
          serviceName: "JPG to PDF",
          description: "Convert JPG image(s) to a PDF file.",
          icon: "picture-as-pdf.png",
        },
        {
          id: "word-to-pdf",
          serviceName: "Word to PDF",
          description: "Convert a DOC or DOCX file into a PDF file.",
          icon: "word-processor.png",
        },
        {
          id: "powerpoint-to-pdf",
          serviceName: "PowerPoint to PDF",
          description: "Convert a PPT or PPTX file into a PDF file.",
          icon: "powerpoint.png",
        },
        {
          id: "excel-to-pdf",
          serviceName: "Excel to PDF",
          description: "Convert Excel spreadsheets into a PDF file.",
          icon: "excel.png",
        },
        {
          id: "html-to-pdf",
          serviceName: "HTML to PDF",
          description:
            "Convert webpages in HTML to PDF by pasting the URL of a website.",
          icon: "html-5.png",
        },
      ],
    },
    {
      name: "Convert from PDF",
      services: [
        {
          id: "pdf-to-jpg",
          serviceName: "PDF to JPG",
          description: "Convert each PDF page into JPG image(s).",
          icon: "jpg.png",
        },
        {
          id: "pdf-to-word",
          serviceName: "PDF to Word",
          description: "Convert a PDF file into a DOC or DOCX to edit.",
          icon: "word-processor.png",
        },
        {
          id: "pdf-to-powerpoint",
          serviceName: "PDF to PowerPoint",
          description: "Convert a PDF file into an easy to edit PPT slideshow.",
          icon: "powerpoint.png",
        },
        {
          id: "pdf-to-excel",
          serviceName: "PDF to Excel",
          description: "Pull data from a PDF file into Excel spreadsheets.",
          icon: "excel.png",
        },
      ],
    },
    {
      name: "Edit PDF",
      services: [
        {
          id: "rotate-pdf",
          serviceName: "Rotate PDF",
          description:
            "Rotate your PDF pages the way you need them. each PDF page into JPG image(s).",
          icon: "rotate.png",
        },
        {
          id: "pdf-page-numbers",
          serviceName: "PDF Page Numbers",
          description:
            "Add page numbers to your PDF with the desired positions & dimensions.",
          icon: "page.png",
        },
        {
          id: "pdf-watermark",
          serviceName: "PDF Watermark",
          description:
            "Stamp a text or an image over your PDF at the desired position.",
          icon: "stamp.png",
        },
        {
          id: "crop-pdf",
          serviceName: "Crop PDF",
          description: "Crop margins of the PDF document.",
          icon: "crop.png",
        },
        {
          id: "edit-pdf",
          serviceName: "Edit PDF",
          description:
            "Easily add text, images, shapes, or freehand drawings to a PDF and personalize their font, size, and color.",
          icon: "edit-file.png",
        },
      ],
    },
    {
      name: "PDF Security",
      services: [
        {
          id: "protect-pdf",
          serviceName: "Protect PDF",
          description:
            "With a password, protect your PDF file. Encrypt it for authorization.",
          icon: "file-security.png",
        },
      ],
    },
  ];
}
