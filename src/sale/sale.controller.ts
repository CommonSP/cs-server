import { Body, Controller, Get, Param, Post } from '@nestjs/common'import { SaleDto } from './dto/sale.dto'import { SaleService } from './services/sale.service'@Controller('sales')export class SaleController {	constructor(private saleService: SaleService) {}	@Get()	async getAllSales() {		return await this.saleService.findAll()	}	@Get(':id')	async getSaleById(@Param('id') id: string) {		const product = await this.saleService.getSaleById(id)		return product	}	@Post()	async addSale(@Body('data') data: SaleDto) {		return await this.saleService.addSale(data)	}}