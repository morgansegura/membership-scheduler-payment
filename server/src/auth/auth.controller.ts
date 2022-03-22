import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpCode,
    Post,
    Req,
    Res,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalAuthenticationGuard } from './local-auth.guard';
import { RequestWithUser } from './request-with-user.interface';
import { Response } from 'express';
import JwtAuthenticationGuard from './jwt-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/users/user.entity';
import { Logger } from '@nestjs/common';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    private logger = new Logger('AuthController');
    constructor(
        private authService: AuthService,
        private jwtService: JwtService,
    ) {}

    @Post('/register')
    async register(@Body() registerDto: RegisterDto): Promise<User> {
        this.logger.verbose(
            `Register new user '${User}'. Options: ${JSON.stringify(
                RegisterDto,
            )}`,
        );
        return this.authService.register(registerDto);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthenticationGuard)
    @Post('/signin')
    async siginin(@Req() request: RequestWithUser, @Res() response: Response) {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(user.username);
        response.setHeader('Set-Cookie', cookie);
        user.password = undefined;

        this.logger.verbose(
            `Request user '${JSON.stringify(
                user,
            )}'. Get and Set Cookie: ${JSON.stringify(cookie)}`,
        );
        response.send(user);
        return user;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('/signout')
    async signout(@Req() request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogout());
        return response.sendStatus(200);
    }
}
