import { UsersService } from './users.service';
import {
    Controller,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import JwtAuthenticationGuard from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/request-with-user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('avatar')
    @UseGuards(JwtAuthenticationGuard)
    @UseInterceptors(FileInterceptor('file'))
    async addAvatar(
        @Req() request: RequestWithUser,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.usersService.addAvatar(
            request.user.id,
            file.buffer,
            file.originalname,
        );
    }
}
