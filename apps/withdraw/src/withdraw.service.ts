import { Injectable } from '@nestjs/common';

@Injectable()
export class WithdrawService {
  getHello(): string {
    return 'Hello World!';
  }
}
