import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Product {
	@PrimaryColumn({ type: 'character', length: 36 })
	guid: string
	@Column({ type: 'character', length: 36, nullable: true })
	cat_guid?: number
	@Column()
	name: string
	@Column({ nullable: true })
	code?: string
	@Column({ nullable: true })
	articul?: string
	@Column({ type: 'numeric', nullable: true })
	price?: number
	@Column({ type: 'numeric', nullable: true })
	price_opt?: number
	@Column({ nullable: true })
	vid_duh_leiki?: string
	@Column({ nullable: true })
	verh_isl?: string
	@Column({ nullable: true })
	vnut_shlang?: string
	@Column({ nullable: true })
	vrash_isliva?: string
	@Column({ nullable: true })
	vysota_smesitely?: string
	@Column({ nullable: true })
	garanty?: string
	@Column({ nullable: true })
	diamt_leiki?: string
	@Column({ nullable: true })
	diamt_isliv?: string
	@Column({ nullable: true })
	collection?: string
	@Column({ nullable: true })
	krep_korpusa?: string
	@Column({ nullable: true })
	marka_material_gaiki?: string
	@Column({ nullable: true })
	material_gaiki?: string
	@Column({ nullable: true })
	material_isdeliy?: string
	@Column({ nullable: true })
	material_isliva?: string
	@Column({ nullable: true })
	mehanism_upravleniy?: string
	@Column({ nullable: true })
	nasnacheniy?: string
	@Column({ nullable: true })
	opisanie?: string
	@Column({ nullable: true })
	perekluchenie?: string
	@Column({ nullable: true })
	standart_gp?: string
	@Column({ nullable: true })
	strana?: string
	@Column({ nullable: true })
	tip_isliva?: string
	@Column({ nullable: true })
	tip_podklucheniy?: string
	@Column({ nullable: true })
	upravlenie?: string
	@Column({ nullable: true })
	kod_tnvde?: string
	@Column({ type: 'numeric', precision: 7, scale: 3, nullable: true })
	ves?: number
	@Column({ nullable: true })
	category?: string
	@Column({ nullable: true })
	dlina_isliva?: string
	@Column({ nullable: true })
	main_image?: string
}
