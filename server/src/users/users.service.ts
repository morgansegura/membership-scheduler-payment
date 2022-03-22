import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private readonly filesService: FilesService,
    ) {}

    async addAvatar(userId: string, imageBuffer: Buffer, filename: string) {
        const avatar = await this.filesService.uploadPublicFile(
            imageBuffer,
            filename,
        );
        const user = await this.usersRepository.getUserBy(userId);
        await this.usersRepository.update(userId, {
            ...user,
            avatar,
        });
        return avatar;
    }

    async deleteAvatar(userId: number) {
        const user = await this.usersRepository.getUserBy(userId);
        const fileId = user.avatar?.id;
        if (fileId) {
            await this.usersRepository.update(userId, {
                ...user,
                avatar: null,
            });
            await this.filesService.deletePublicFile(fileId);
        }
    }
}
