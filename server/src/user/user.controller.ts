import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Roles } from './role.decorator';
import { Role } from './role.enum';
import { UserService } from './user.service';
import { Request, Response } from 'Express';
import { AuthGuard } from 'src/auth/auth.guard';
// import { v4 as uuid } from 'uuid';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Get('admin/members')
  @Roles(Role.Moderator)
  @Roles(Role.Admin)
  members() {
    return this.userService.find({
      role: 'member',
    });
  }
  @Roles(Role.Admin)
  @Get('admin/mods')
  moderators() {
    return this.userService.find({
      role: 'mod',
    });
  }

  @Roles(Role.Admin)
  @Get('admin/admins')
  admins() {
    return this.userService.find({
      role: 'admin',
    });
  }
}
