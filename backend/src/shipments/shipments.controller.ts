import { Controller, Get } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';

@Controller('api/shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Get()
  async getShipments() {
    return this.shipmentsService.getAllShipments();
  }
}

