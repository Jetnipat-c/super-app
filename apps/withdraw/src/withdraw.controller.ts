import { Controller, Get } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';

@Controller()
export class WithdrawController {
  constructor(private readonly withdrawService: WithdrawService) {}

  @Get()
  getHello(): string {
    return this.withdrawService.getHello();
  }
}
