import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthGuard } from './auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  @Post('admin/register')
  async register(@Body() body: RegisterDto) {
    const { passwordConfirm, email, ...data } = body;
    const user = await this.userService.findOne({ email });

    if (user) {
      throw new BadRequestException('User already exists!');
    }

    if (body.password !== body.passwordConfirm) {
      throw new BadRequestException('Passwords do not match!');
    }
    const hashedPassword = await bcrypt.hash(body.password, 12);

    return this.userService.save({
      ...data,
      email,
      password: hashedPassword,
      message: 'Successfully registered!',
    });
  }

  @Post('admin/signin')
  async signin(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userService.findOne({ email });

    if (!user) {
      throw new NotFoundException('User is not found!');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials!');
    }

    const jwt = await this.jwtService.signAsync({
      id: user.id,
    });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'Successfully logged in!',
      jwt,
      user,
    };
  }

  @UseGuards(AuthGuard)
  @Get('admin/user')
  async user(@Req() request: Request) {
    const cookie = request.cookies['jwt'];

    const { id } = await this.jwtService.verifyAsync(cookie);

    const user = await this.userService.findOne({ id });

    return user;
  }

  @Post('admin/signout')
  async signout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'Successfully logged out!',
    };
  }

  // @UseGuards(AuthGuard)
  // @Patch('admin/user/info')
  // async updateInfo(@Req() request: Request, @Body() body: UpdateUserDto) {
  //   const cookie = request.cookies['jwt'];
  //   const { id } = await this.jwtService.verifyAsync(cookie);

  //   await this.userService.update(id, {
  //     ...body,
  //   });

  //   return this.userService.findOne({ id });
  // }

  @UseGuards(AuthGuard)
  @Patch('admin/user/pasword')
  async updatePassword(
    @Req() request: Request,
    @Body('password') password: string,
    @Body('passwordConfirm') passwordConfirm: string,
  ) {
    if (password !== passwordConfirm) {
      throw new BadRequestException('Passwords do not match!');
    }

    const cookie = request.cookies['jwt'];
    const { id } = await this.jwtService.verifyAsync(cookie);

    await this.userService.update(id, {
      password: await bcrypt.hash(password, 12),
    });

    return this.userService.findOne({ id });
  }

  // @UseGuards(AuthGuard)
  // @Patch('admin/user/info')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: 'avatar', maxCount: 1 },
  //     { name: 'background', maxCount: 1 },
  //   ]),
  // )
  // async uploadFile(
  //   @Req()
  //   request: Request,
  //   @UploadedFiles()
  //   files: {
  //     avatar?: Express.Multer.File[];
  //     background?: Express.Multer.File[];
  //   },
  // ) {
  //   const cookie = request.cookies['jwt'];

  //   const { id } = await this.jwtService.verifyAsync(cookie);

  //   const user = await this.userService.findOne({ id });

  //   if (user) {
  //     user.avatar = files.avatar;
  //     await this.userService.update(id, { ...user, role: 'admin' });
  //   }

  //   console.log(user);
  //   console.log(files);
  //   return user;
  // }
}
