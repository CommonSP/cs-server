import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Sale } from '../../sale/sale.entity'

@Injectable()
export class FilesService {
	constructor(@InjectRepository(Sale) private saleRepository: Repository<Sale>) {}

	async addImage(id: string, image: string) {
		const sale: Sale | null = await this.saleRepository.findOneBy({ id })
		console.log(sale)
		console.log('ss')
		if (sale) {
			sale.image = image
			console.log(sale)
			await this.saleRepository.update({ id }, sale)
		}
	}
}
