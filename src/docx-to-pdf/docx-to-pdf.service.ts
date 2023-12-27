import * as fs from "fs";
import * as mammoth from "mammoth";
import { Injectable } from "@nestjs/common";
import * as puppeteer from "puppeteer";

@Injectable()
export class DocxToPdfService {
	async convertToPdf(docxFilePath: string, pdfFilePath: string): Promise<void> {
		try {
			const { value } = await mammoth.extractRawText({ path: docxFilePath });
			const htmlContent = `<html><body>${value}</body></html>`;
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.setContent(htmlContent);
			await page.pdf({ path: pdfFilePath, format: "Letter" });
			await browser.close();
			console.log("PDF created at:", pdfFilePath);
		} catch (error) {
			console.error("Error:", error.message);
			throw error;
		}
	}
}
