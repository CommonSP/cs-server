import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const port = process.env.PORT || 3000
	await app.setGlobalPrefix('api')
	await app.enableCors()
	await app.useGlobalPipes(new ValidationPipe())
	await app.listen(port)

	console.log(`Server started on port: ${port}`)
}

bootstrap()
