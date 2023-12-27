import { Test, TestingModule } from '@nestjs/testing';
import { DocxToPdfController } from './docx-to-pdf.controller';

describe('DocxToPdfController', () => {
  let controller: DocxToPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocxToPdfController],
    }).compile();

    controller = module.get<DocxToPdfController>(DocxToPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
