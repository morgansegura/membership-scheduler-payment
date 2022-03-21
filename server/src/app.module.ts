import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { TasksModule } from './tasks/tasks.module';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

// db.createUser({
//   user: 'morgansegura',
//   pwd: 'S3GuRa536',
//   roles: [{ role: 'userAdminAnyDatabase', db: 'admin' }],
// });
