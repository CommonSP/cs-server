import {Body, Controller, Post, UseGuards} from '@nestjs/common'
import {UserDto} from '../user/dto/user.dto'
import {AuthService} from './auth.service'
import {LoginDto} from './dto/login.dto'
import {AuthGuard} from './guards/auth.guard'
import {MailerService} from "@nestjs-modules/mailer";
import {NewClientDto} from "./dto/new-client.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    async login(@Body() user: UserDto) {
        return await this.authService.login(user)
    }

    @UseGuards(AuthGuard)
    @Post('registration')
    async registration(@Body() user: UserDto) {
        return await this.authService.registration(user)
    }

    @Post('registration-client')
    async registrationClient(@Body() newClient: NewClientDto){
      return  await this.authService.registrationClient(newClient)
    }
}
