import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id?: string

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column({ default: true })
	isActive?: boolean

	@Column()
	role: string

	@Column()
	email: string

	@Column()
	password: string
}
