import { NestFactory } from '@nestjs/core';
import { WithdrawModule } from './withdraw.module';

async function bootstrap() {
  const app = await NestFactory.create(WithdrawModule);
  await app.listen(3000);
}
bootstrap();
