import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocxToPdfModule } from './docx-to-pdf/docx-to-pdf.module';

@Module({
  imports: [DocxToPdfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
