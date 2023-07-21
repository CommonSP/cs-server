import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from '../products/product.entity'

@Entity()
export class Sale {
	@PrimaryGeneratedColumn()
	id?: string
	@Column()
	name: string
	@Column()
	image: string
	@Column()
	discount: number
	@ManyToMany(() => Product)
	@JoinTable()
	products: Product[]
}