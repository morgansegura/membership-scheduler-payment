import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private authService: AuthService,
        private jwtService: JwtService,
    ) {}
    @Post('/register')
    async register(@Body() authCredentialsDto: AuthCredentialsDto) {
        return this.authService.register(authCredentialsDto);
    }

    // @Post('admin/signin')
    // async signin(
    //   @Body('email') email: string,
    //   @Body('password') password: string,
    //   @Res({ passthrough: true }) response: Response,
    // ) {
    //   const user = await this.userService.findOne({ email });

    //   if (!user) {
    //     throw new NotFoundException('User is not found!');
    //   }

    //   if (!(await bcrypt.compare(password, user.password))) {
    //     throw new BadRequestException('Invalid credentials!');
    //   }

    //   const jwt = await this.jwtService.signAsync({
    //     id: user.id,
    //   });

    //   response.cookie('jwt', jwt, { httpOnly: true });

    //   return {
    //     message: 'Successfully logged in!',
    //     jwt,
    //     user,
    //   };
    // }

    // @UseGuards(AuthGuard)
    // @Get('admin/user')
    // async user(@Req() request: Request) {
    //   const cookie = request.cookies['jwt'];

    //   const { id } = await this.jwtService.verifyAsync(cookie);

    //   const user = await this.userService.findOne({ id });

    //   return user;
    // }

    // @Post('admin/signout')
    // async signout(@Res({ passthrough: true }) response: Response) {
    //   response.clearCookie('jwt');

    //   return {
    //     message: 'Successfully logged out!',
    //   };
    // }

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

    // @UseGuards(AuthGuard)
    // @Patch('admin/user/pasword')
    // async updatePassword(
    //   @Req() request: Request,
    //   @Body('password') password: string,
    //   @Body('passwordConfirm') passwordConfirm: string,
    // ) {
    //   if (password !== passwordConfirm) {
    //     throw new BadRequestException('Passwords do not match!');
    //   }

    //   const cookie = request.cookies['jwt'];
    //   const { id } = await this.jwtService.verifyAsync(cookie);

    //   await this.userService.update(id, {
    //     password: await bcrypt.hash(password, 12),
    //   });

    //   return this.userService.findOne({ id });
    // }

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
