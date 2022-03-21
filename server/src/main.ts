import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
    const logger = new Logger();
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
        ],
        credentials: true,
    });
    const port = 3001;
    await app.listen(port);
    logger.log(`Application listening on port ${port}`);
}
bootstrap();
