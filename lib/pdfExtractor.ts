import PDFParser from "pdf2json";

export async function extractPdfText(file: File): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const pdfParser = new PDFParser();

     pdfParser.on("pdfParser_dataError", (errData: any) => {
  reject(errData);
});

      pdfParser.on("pdfParser_dataReady", () => {
        const data = pdfParser.getRawTextContent();
        resolve(data);
      });

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      pdfParser.parseBuffer(buffer);
    } catch (error) {
      reject(error);
    }
  });
}