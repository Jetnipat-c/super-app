import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern('get_account')
  getAccount(@Payload() payload: any) {
    console.log(payload.value);
    return { repo: 'account', data: payload.value };
  }
}
