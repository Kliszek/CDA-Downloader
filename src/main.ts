import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });
  app.use(json({ limit: '20mb' }));
  app.use(urlencoded({ extended: true, limit: '20mb' }));
  await app.listen(3000);
}
bootstrap();
