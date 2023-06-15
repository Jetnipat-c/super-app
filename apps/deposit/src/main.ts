import { NestFactory } from '@nestjs/core';
import { DepositModule } from './deposit.module';

async function bootstrap() {
  const app = await NestFactory.create(DepositModule);
  await app.listen(3000);
}
bootstrap();
