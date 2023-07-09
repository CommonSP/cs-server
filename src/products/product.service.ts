import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './product.entity'

@Injectable()
export class ProductService {
	constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

	getProducts() {
		return this.productRepository.findAndCount({ take: 10, skip: 0 })
	}
}
