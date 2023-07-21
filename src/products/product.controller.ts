import {Body, Controller, Get, Param, Put, Query} from '@nestjs/common'
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
		return await this.productService.getProductById(id)
	}

	@Get('article/:article')
	async getProductByArticle(@Param('article') article: string) {
		return await this.productService.getProductByArticle(article)
	}

	@Put(':id')
	async updateProductById(@Param('id') id: string, @Body('data') data: any) {
		return await this.productService.updateProductById(id, data)
	}
}
