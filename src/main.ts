/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { LoggerService } from '@nestjs/common';
const port = parseInt(process.env.SERVER_PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('API My Website')
    .setDescription('API My Website')
    .setVersion('2.0')
    .build();

  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
  await app.listen(port);
}

bootstrap();
