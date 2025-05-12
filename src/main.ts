import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET,POST,PUT,DELETE',
      credentials:true
    }
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
