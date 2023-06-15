import { Injectable } from '@nestjs/common';

@Injectable()
export class DepositService {
  getHello(): string {
    return 'Hello World!';
  }
}
