import { Module } from "@nestjs/common";
import { DocxToPdfService } from "./docx-to-pdf.service";
import { DocxToPdfController } from "./docx-to-pdf.controller";

@Module({
	providers: [DocxToPdfService],
	controllers: [DocxToPdfController],
})
export class DocxToPdfModule {}
