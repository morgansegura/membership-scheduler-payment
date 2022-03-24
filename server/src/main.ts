import {
    ClassSerializerInterceptor,
    Logger,
    ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { config } from 'aws-sdk';

async function bootstrap() {
    const logger = new Logger();
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(
        new ClassSerializerInterceptor(app.get(Reflector)),
    );
    // [Pass Cookies]
    app.use(cookieParser());
    // [Prefix]
    app.setGlobalPrefix('api');
    // [Cors]
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
        ],
        credentials: true,
    });
    // [AWS]
    const configService = app.get(ConfigService);
    config.update({
        accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
        region: configService.get('AWS_REGION'),
    });
    // [Swagger]
    const swaggerConfig = new DocumentBuilder()
        .setTitle('BluePrint Example')
        .setDescription('The BluePrint API description')
        .setVersion('1.0')
        .addTag('test-tag')
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);
    // [Port]
    const port = 3001;
    await app.listen(port);
    logger.log(`Application listening on port ${port}`);
}
bootstrap();
