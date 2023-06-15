import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'account',
            brokers: ['localhost:8097', 'localhost:8098', 'localhost:8099'],
          },
          consumer: {
            groupId: 'account-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
