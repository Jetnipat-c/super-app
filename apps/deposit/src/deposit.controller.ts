import { Controller, Get } from '@nestjs/common';
import { DepositService } from './deposit.service';

@Controller()
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Get()
  getHello(): string {
    return this.depositService.getHello();
  }
}
