import { HttpException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'
import { Repository } from 'typeorm'
import { ProductService } from '../../products/product.service'
import { Image } from '../image.entity'

@Injectable()
export class ImageService {
	constructor(@InjectRepository(Image) private imageRepository: Repository<Image>, private productService: ProductService) {}

	async saveImage(name: string, guid: string, category: string) {
		const product = await this.productService.getProductById(guid)

		if (product) {
			if (category == 'main') {
				const mainImage = await this.imageRepository.findOneBy({ product: product, category: 'main' })
				if (mainImage) {
					mainImage.name = name
					console.log('done1')
					return this.imageRepository.save(mainImage)
				}
			}
			const image = new Image()
			image.id = new Date().getMilliseconds().toString()
			image.name = name
			image.product = product
			image.category = category

			return this.imageRepository.save(image)
		}
	}

	async deleteImage(id: string) {
		const image = await this.imageRepository.findOneBy({ id })
		if (image) {
			fs.unlink(path.join(process.cwd(), '../image/products', image.product.guid, image.name), (err) => {
				if (err) throw new HttpException('Файл не найден', 500)
			})
		}
	}
}