import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { UserDto } from '../user/dto/user.dto'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { AuthGuard } from './guards/auth.guard'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	async login(@Body() user: LoginDto) {
		return await this.authService.login(user)
	}

	@UseGuards(AuthGuard)
	@Post('registration')
	async registration(@Body() user: UserDto) {
		return await this.authService.registration(user)
	}
}
