import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const main = await NestFactory.create(MainModule);
  await main.listen(3000);
}
bootstrap();
