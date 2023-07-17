import { Controller, Get, Param, Query } from '@nestjs/common'
import { GetProductsDto } from './dto/get-products-dto'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private productService: ProductService) {}

	@Get()
	async getProducts(@Query() params: GetProductsDto) {
		const [items, total_count] = await this.productService.getProducts(params)
		return { items, total_count }
	}

	@Get(':id')
	async getProductById(@Param('id') id: string) {
		const product = await this.productService.getProductById(id)
		return product
	}
}
