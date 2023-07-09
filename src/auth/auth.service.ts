import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UserDto } from '../user/dto/user.dto'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

	async login(user: LoginDto) {
		const existUser = await this.userService.getUserByEmail(user.email)
		if (!existUser) throw new UnauthorizedException()

		if (!(await bcrypt.compare(user.password, existUser.password))) throw new UnauthorizedException()
		const { password, ...data } = existUser
		return {
			access_token: await this.jwtService.signAsync(data),
		}
	}

	async registration(user: UserDto) {
		const existUser = await this.userService.getUserByEmail(user.email)
		if (existUser) throw new HttpException('Пользователь с указанным email уже существует', 500)

		return await this.userService.createUser(user)
	}
}
