import {
    ConflictException,
    HttpException,
    HttpStatus,
    InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from '../auth/dto/register.dto';
import { PostgresErrorCode } from '../database/postgres-error-codes.enum';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    async createUser(registerDto: RegisterDto): Promise<User> {
        const { password } = registerDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        try {
            const createdUser = this.create({
                ...registerDto,
                password: hashedPassword,
            });
            await this.save(createdUser);
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async getUserBy(args: any) {
        const user = await this.findOne(args);
        if (user) {
            return user;
        }
        throw new HttpException(
            'User with these credntials does not exist',
            HttpStatus.NOT_FOUND,
        );
    }
}
