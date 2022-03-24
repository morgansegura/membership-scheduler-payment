import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ExceptionsLoggerFilter } from 'utils/exceptionsLogger.filter';
import { APP_FILTER } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env.stage.${process.env.STAGE}`],
            validationSchema: configValidationSchema,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    autoLoadEntities: true,
                    synchronize: true,
                    host: configService.get('DB_HOST'),
                    port: parseInt(configService.get('DB_PORT'), 10) || 5432,
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                };
            },
        }),
        AuthModule,
        CloudinaryModule,
        TasksModule,
        UsersModule,
        PostsModule,
        CategoriesModule,
        SearchModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: ExceptionsLoggerFilter,
        },
    ],
})
export class AppModule {}
