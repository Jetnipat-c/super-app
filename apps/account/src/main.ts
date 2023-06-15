import { NestFactory } from '@nestjs/core';
import { AccountModule } from './account.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AccountModule, {
    transport: Transport.KAFKA,

    options: {
      client: {
        brokers: ['localhost:8097', 'localhost:8098', 'localhost:8099'],
      },
      consumer: {
        groupId: 'account-consumer',
      },
    },
  });
  // await app.start
  await app.listen();
}
bootstrap();
