import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Sale } from '../../sale/sale.entity'
import {Product} from "../../products/product.entity";

@Injectable()
export class FilesService {
	constructor(@InjectRepository(Sale) private saleRepository: Repository<Sale>, @InjectRepository(Product) private productRepository: Repository<Product> ) {}

	async addImage(id: string, image: string) {
		const sale: Sale | null = await this.saleRepository.findOneBy({ id })
		if (sale) {
			sale.image = image
			await this.saleRepository.update({ id }, sale)
		}
	}

	async addImageMainProduct(guid: string, image: string) {
		const product: Product | null = await this.productRepository.findOneBy({ guid })
		if (product) {
			product.main_image = image
			await this.productRepository.update({ guid }, product)
		}
	}
}
