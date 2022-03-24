import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from '../users/users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

import { ConfigService, ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { UsersService } from '../users/users.service';
import { LocalStrategy } from './local.strategy';
import { FilesModule } from 'src/files/files.module';
import { PrivateFilesModule } from 'src/privateFiles/privateFiles.module';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: configService.get('JWT_EXPIRATION_TIME'),
                },
            }),
        }),
        TypeOrmModule.forFeature([UsersRepository]),
        FilesModule,
        PrivateFilesModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        LocalStrategy,
        UsersService,
        PrivateFilesModule,
        { provide: APP_GUARD, useClass: RolesGuard },
    ],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
