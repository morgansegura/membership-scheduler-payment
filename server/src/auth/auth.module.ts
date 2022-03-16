import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository]),
        JwtModule.register({
            secret: 'fhsdkjfh9827oishdfilkhdsf9703498tyheisludhf',
            signOptions: { expiresIn: '1d' },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
