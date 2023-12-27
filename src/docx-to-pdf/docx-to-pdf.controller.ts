import { Controller, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express"; // Import Response from 'express' package
import { DocxToPdfService } from "./docx-to-pdf.service";
import * as fs from "fs";
@Controller("convert")
export class DocxToPdfController {
	constructor(private readonly docxToPdfService: DocxToPdfService) {}

	@Post("docx-to-pdf")
	@UseInterceptors(FileInterceptor("file"))
	async convertDocxToPdf(@UploadedFile() file: Express.Multer.File, @Res() res: Response): Promise<string> {
		try {
			const docxFilePath = `uploads/${file.originalname}`;
			const pdfFilePath = `uploads/${file.originalname.replace(".docx", ".pdf")}`;
			fs.writeFileSync(docxFilePath, file.buffer);
			await this.docxToPdfService.convertToPdf(docxFilePath, pdfFilePath);
			res.download(pdfFilePath, "output.pdf", (err) => {
				if (err) {
					console.error("Error sending file to client:", err);
					throw new Error("Failed to send the file to the client");
				}
				fs.unlinkSync(docxFilePath);
				fs.unlinkSync(pdfFilePath);
			});
			return pdfFilePath;
		} catch (error) {
			console.error("Error:", error.message);
			res.status(500).send("Internal Server Error");
		}
	}
}
