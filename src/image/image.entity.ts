import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "../products/product.entity";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: string
    @Column({default: 'simple'})
    category: string
    @Column()
    name: string
    @ManyToOne(() => Product, (product) => product.images)
    product: Product
}
