import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../users/users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/user.entity';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async register(registerDto: RegisterDto): Promise<User> {
        return this.usersRepository.createUser(registerDto);
    }

    async getAuthenticatedUser(
        username: string,
        password: string,
    ): Promise<User> {
        try {
            const user = await this.usersRepository.getUserBy({ username });
            await this.verifyPassword(password, user.password);

            return user;
        } catch (error) {
            throw new HttpException(
                'Wrong credentials provided',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    private async verifyPassword(password: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            password,
            hashedPassword,
        );
        if (!isPasswordMatching) {
            throw new HttpException(
                'Wrong credentials provided',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    getCookieWithJwtToken(username: string) {
        const payload: JwtPayload = { username };
        const accessToken: string = this.jwtService.sign(payload);
        return `Authentication=${accessToken}; HttpOnly; Path=/; Max-Age=${this.configService.get(
            'JWT_EXPIRATION_TIME',
        )}`;
    }

    getCookieForLogout() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}
