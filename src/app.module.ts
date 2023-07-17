import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as process from 'process'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module'
import { UserModule } from './user/user.module'
import {AppGateway} from "./testws";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_POSRT),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [],
			autoLoadEntities: true,
			synchronize: true,
		}),
		JwtModule.register({
			global: true,
			secret: process.env.SECRET,
			signOptions: { expiresIn: '60d' },
		}),

		UserModule,
		AuthModule,
		ProductsModule,
	],
	controllers: [AppController],
	providers: [AppService, AppGateway],
})
export class AppModule {}
