import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { DeleteResult, Repository } from 'typeorm'
import { UserDto } from './dto/user.dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async findAll(): Promise<User[]> {
		try {
			return await this.usersRepository.find()
		} catch (e) {
			throw new HttpException('Пользователь не найден', 500)
		}
	}

	async findOne(id: string): Promise<User | null> {
		try {
			return await this.usersRepository.findOneBy({ id })
		} catch (e) {
			throw new HttpException('Пользователи не найдены', 500)
		}
	}

	async createUser(user: UserDto): Promise<User> {
		const salt: string = await bcrypt.genSalt()
		try {
			const createdUser: User = {
				firstName: user.firstName,
				lastName: user.lastName,
				role: 'USER',
				password: await bcrypt.hash(user.password, salt),
				email: user.email,
			}
			return await this.usersRepository.save(createdUser)
		} catch (e) {
			throw new HttpException('Не удалось создать пользователя', 400)
		}
	}

	async remove(id: string): Promise<DeleteResult> {
		try {
			return this.usersRepository.delete(id)
		} catch (e) {
			throw new HttpException('Не удалось удалить пользователя с указанным id', 500)
		}
	}

	async getUserByEmail(email: string) {
		return this.usersRepository.findOneBy({ email })
	}
}
