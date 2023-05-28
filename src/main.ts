import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
const port = parseInt(process.env.SERVER_PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(new ValidationPipe());

  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
  await app.listen(port);
}

bootstrap();
