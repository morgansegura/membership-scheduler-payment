import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { PrivateFilesService } from 'src/privateFiles/privateFiles.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private readonly filesService: FilesService,
        private readonly privateFilesService: PrivateFilesService,
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
        console.log(user);
        return avatar;
    }

    async getPublicFile(userId: string, fileId: string) {
        const file = await this.filesService.getPublicFile(fileId);
        console.log(file.info.id);
        console.log(userId);
        if (file.info.id) {
            return file;
        }
        throw new UnauthorizedException();
    }

    async deleteAvatar(userId: string) {
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

    async addPrivateFile(
        userId: string,
        imageBuffer: Buffer,
        filename: string,
    ) {
        return this.privateFilesService.uploadPrivateFile(
            imageBuffer,
            userId,
            filename,
        );
    }

    async getPrivateFile(userId: string, fileId: string) {
        const file = await this.privateFilesService.getPrivateFile(fileId);
        if (file.info.id === userId) {
            return file;
        }
        throw new UnauthorizedException();
    }

    async getAllPrivateFiles(userId: string) {
        const userWithFiles = await this.usersRepository.findOne(
            { id: userId },
            { relations: ['files'] },
        );
        if (userWithFiles) {
            return Promise.all(
                userWithFiles.files.map(async (file) => {
                    const url =
                        await this.privateFilesService.generatePresignedUrl(
                            file.key,
                        );
                    return {
                        ...file,
                        url,
                    };
                }),
            );
        }
        throw new NotFoundException('User with this id does not exist');
    }
}
