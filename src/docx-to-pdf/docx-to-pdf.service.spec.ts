import { Test, TestingModule } from '@nestjs/testing';
import { DocxToPdfService } from './docx-to-pdf.service';

describe('DocxToPdfService', () => {
  let service: DocxToPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocxToPdfService],
    }).compile();

    service = module.get<DocxToPdfService>(DocxToPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
