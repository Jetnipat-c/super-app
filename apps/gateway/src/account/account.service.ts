import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AccountService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('ACCOUNT_MICROSERVICE') private readonly accountClient: ClientKafka,
  ) {}

  async onModuleInit() {
    ['get.account'].forEach((key) => {
      console.log(key);
      this.accountClient.subscribeToResponseOf(`${key}`);
    });
    await this.accountClient.connect();
  }

  async onModuleDestroy() {
    await this.accountClient.close();
  }

  async getAccount() {
    const result = await this.accountClient.send(
      'get.account',
      JSON.stringify({ accountId: 250060 }),
    );

    console.log(result);

    return result;
  }
}
