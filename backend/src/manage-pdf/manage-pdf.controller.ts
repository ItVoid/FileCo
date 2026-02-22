import { Controller } from '@nestjs/common';
import { ManagePdfService } from './manage-pdf.service';

@Controller()
export class ManagePdfController {
  constructor(private readonly managePdfService: ManagePdfService) {}
}
