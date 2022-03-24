import { UsersService } from './users.service';
import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Req,
    Res,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import JwtAuthenticationGuard from 'src/auth/jwtAuth.guard';
import { RequestWithUser } from 'src/auth/requestWithUser.interface';
import FindOneParams from 'utils/findOneParams';

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

    @Get('avatar/:id')
    @UseGuards(JwtAuthenticationGuard)
    async getPublicFile(
        @Req() request: RequestWithUser,
        @Param() { id }: FindOneParams,
        @Res() res: Response,
    ) {
        const file = await this.usersService.getPublicFile(
            request.user.id,
            String(id),
        );
        file.stream.pipe(res);
    }

    @Delete('avatar')
    @UseGuards(JwtAuthenticationGuard)
    async removeAvatar(@Req() request: RequestWithUser) {
        return this.usersService.deleteAvatar(request.user.id);
    }

    @Post('files')
    @UseGuards(JwtAuthenticationGuard)
    @UseInterceptors(FileInterceptor('file'))
    async addPrivateFile(
        @Req() request: RequestWithUser,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.usersService.addPrivateFile(
            request.user.id,
            file.buffer,
            file.originalname,
        );
    }

    @Get('files/:id')
    @UseGuards(JwtAuthenticationGuard)
    async getPrivateFile(
        @Req() request: RequestWithUser,
        @Param() { id }: FindOneParams,
        @Res() res: Response,
    ) {
        const file = await this.usersService.getPrivateFile(
            request.user.id,
            String(id),
        );
        file.stream.pipe(res);
    }

    @Get('files')
    @UseGuards(JwtAuthenticationGuard)
    async getAllPrivateFiles(@Req() request: RequestWithUser) {
        return this.usersService.getAllPrivateFiles(request.user.id);
    }
}
