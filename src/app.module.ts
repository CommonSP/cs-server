import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import * as process from 'process'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module'
import { AppGateway } from './testws'
import { UserModule } from './user/user.module'
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
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'client', 'dist', 'cs-front'),
		}),
		UserModule,
		AuthModule,
		ProductsModule,
	],
	controllers: [AppController],
	providers: [AppService, AppGateway],
})
export class AppModule {}
