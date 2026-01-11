type AppContent = {
  name: string;
  services: { serviceName: string; description: string; icon: string }[];
};

export default function appContent(): AppContent[] {
  return [
    {
      name: "Manage PDF",
      services: [
        {
          serviceName: "Merge PDF",
          description: "Combine PDFs with the desired order.",
          icon: "merge.png",
        },
        {
          serviceName: "Split PDF",
          description:
            "Separate PDF pages into multiple ones based on your need.",
          icon: "partition.png",
        },
        {
          serviceName: "Remove Pages",
          description: "Remove selected pages from a PDF file.",
          icon: "delete-file.png",
        },
        {
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
          serviceName: "Compress PDF",
          description: "Reduce & optimize PDF size keeping maximal quality.",
          icon: "minimize.png",
        },
        {
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
          serviceName: "JPG to PDF",
          description: "Convert JPG image(s) to a PDF file.",
          icon: "picture-as-pdf.png",
        },
        {
          serviceName: "Word to PDF",
          description: "Convert a DOC or DOCX file into a PDF file.",
          icon: "word-processor.png",
        },
        {
          serviceName: "PowerPoint to PDF",
          description: "Convert a PPT or PPTX file into a PDF file.",
          icon: "powerpoint.png",
        },
        {
          serviceName: "Excel to PDF",
          description: "Convert Excel spreadsheets into a PDF file.",
          icon: "excel.png",
        },
        {
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
          serviceName: "PDF to JPG",
          description: "Convert each PDF page into JPG image(s).",
          icon: "",
        },
        {
          serviceName: "PDF to Word",
          description: "Convert a PDF file into a DOC or DOCX to edit.",
          icon: "",
        },
        {
          serviceName: "PDF to PowerPoint",
          description: "Convert a PDF file into an easy to edit PPT slideshow.",
          icon: "",
        },
        {
          serviceName: "PDF to Excel",
          description: "Pull data from a PDF file into Excel spreadsheets.",
          icon: "",
        },
      ],
    },
    {
      name: "Edit PDF",
      services: [
        {
          serviceName: "Rotate PDF",
          description:
            "Rotate your PDF pages the way you need them. each PDF page into JPG image(s).",
          icon: "",
        },
        {
          serviceName: "PDF Page Numbers",
          description:
            "Add page numbers to your PDF with the desired positions & dimensions.",
          icon: "",
        },
        {
          serviceName: "PDF Watermark",
          description:
            "Stamp a text or an image over your PDF at the desired position.",
          icon: "",
        },
        {
          serviceName: "Crop PDF",
          description: "Crop margins of the PDF document.",
          icon: "",
        },
        {
          serviceName: "Edit PDF",
          description:
            "Easily add text, images, shapes, or freehand drawings to a PDF and personalize their font, size, and color.",
          icon: "",
        },
      ],
    },
    {
      name: "PDF Security",
      services: [
        {
          serviceName: "Protect PDF",
          description:
            "With a password, protect your PDF file. Encrypt it for authorization.",
          icon: "",
        },
      ],
    },
  ];
}
