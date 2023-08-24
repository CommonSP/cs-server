import { IsEmail, IsNotEmpty } from 'class-validator'

export class NewClientDto {
    @IsNotEmpty()
    fio: string
    @IsNotEmpty()
    phone: string
    @IsEmail()
    email: string
    @IsNotEmpty()
    company: string
    @IsNotEmpty()
    inn: string
    @IsNotEmpty()
    typeTrade: string
    @IsNotEmpty()
    products: string
    @IsNotEmpty()
    message: string

}
