import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from './role.decorator';
import { Role } from './role.enum';
import { UserService } from './user.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

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
