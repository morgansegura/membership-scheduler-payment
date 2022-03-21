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
    async register(
        @Body() authCredentialsDto: AuthCredentialsDto,
    ): Promise<void> {
        return this.authService.register(authCredentialsDto);
    }
    @Post('/signin')
    async siginin(
        @Body() authCredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        return this.authService.signin(authCredentialsDto);
    }
}
