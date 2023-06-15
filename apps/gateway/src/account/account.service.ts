import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_MICROSERVICE') private readonly accountClient: ClientKafka,
  ) {}

  async getAccount() {
    console.log('Emit to get_account');

    const result = await this.accountClient.send(
      'get_account',
      JSON.stringify({ accountId: 100 }),
    );

    return { data: result };
  }
}
