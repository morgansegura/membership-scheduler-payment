import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    Req,
    Res,
    SerializeOptions,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthenticationGuard } from './localAuth.guard';
import { RequestWithUser } from './requestWithUser.interface';
import { Response } from 'express';
import JwtAuthenticationGuard from './jwtAuth.guard';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/users/user.entity';
import { Logger } from '@nestjs/common';

@Controller('auth')
@SerializeOptions({
    strategy: 'excludeAll',
})
export class AuthController {
    private logger = new Logger('AuthController');
    constructor(private authService: AuthService) {}

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
    async siginin(@Req() request: RequestWithUser): Promise<User> {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(user.username);
        request.res.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        this.logger.verbose(
            `Request user '${JSON.stringify(
                user,
            )}'. Get and Set Cookie: ${JSON.stringify(cookie)}`,
        );
        // request.res.send(user);
        return user;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post('/signout')
    async signout(@Req() request: RequestWithUser, @Res() response: Response) {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogout());
        return response.sendStatus(200);
    }

    @UseGuards(JwtAuthenticationGuard)
    @Get()
    authenticate(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }
}
