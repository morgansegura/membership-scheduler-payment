import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) {}

    async getUserBy(args: any) {
        const user = await this.usersRepository.findOne(args);
        if (user) {
            return user;
        }
        throw new HttpException(
            'User with these credntials does not exist',
            HttpStatus.NOT_FOUND,
        );
    }
}
