import {HttpException, Injectable, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import {UserDto} from '../user/dto/user.dto'
import {UserService} from '../user/user.service'
import {LoginDto} from './dto/login.dto'
import {NewClientDto} from "./dto/new-client.dto";
import {MailerService} from "@nestjs-modules/mailer";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService,
                private readonly mailerService: MailerService) {
    }

    async login(user: LoginDto) {
        const existUser = await this.userService.getUserByEmail(user.email)
        if (!existUser) throw new UnauthorizedException()

        if (!(await bcrypt.compare(user.password, existUser.password))) throw new UnauthorizedException()
        const {password, ...data} = existUser
        return {
            access_token: await this.jwtService.signAsync(data),
        }
    }

    async registration(user: UserDto) {
        const existUser = await this.userService.getUserByEmail(user.email)
        if (existUser) throw new HttpException('Пользователь с указанным email уже существует', 500)

        return await this.userService.createUser(user)
    }

    async registrationClient(newClient: NewClientDto) {
        return this.mailerService
            .sendMail({
                to: 'Evgeniy2000sa@yandex.ru',
                from: 'cs-server-mail@mail.ru',
                subject: 'Регистрация нового пользователя',
                html: `
                    <h1>Данные пользователя</h1>
                    <ul>
                        <li>ФИО: ${newClient.fio}</li>
                        <li>Телефон: ${newClient.phone}</li>
                        <li>Почта: ${newClient.email}</li>
                        <li>Компания: ${newClient.company}</li>
                        <li>ИНН: ${newClient.inn}</li>
                        <li>Тип торговли: ${newClient.typeTrade}</li>
                        <li>Продукция: ${newClient.products}</li>
                        <li>Письмо: ${newClient.message}</li>
                    </ul>
                    `,
            })
            .then(() => {
            })
            .catch((err) => {
                console.log(err)
            });
    }
}
