import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getAllUsers() {
		return await this.userService.findAll()
	}

	@Get(':id')
	async getUser(@Body('id') id: string) {
		return await this.userService.findOne(id)
	}

	@Post()
	async addUser(@Body() user: UserDto) {
		return await this.userService.createUser(user)
	}

	@Delete()
	async removeUser(@Body('id') id: string) {
		return await this.userService.remove(id)
	}
}
