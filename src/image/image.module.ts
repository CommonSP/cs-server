import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Image} from "./image.entity";
import {ImageController} from "./image.controller";
import {ImageService} from "./services/image.service";
import {ProductsModule} from "../products/products.module";

@Module({
    imports: [TypeOrmModule.forFeature([Image]), ProductsModule],
    exports: [TypeOrmModule],
    controllers: [ImageController],
    providers: [ImageService]
})
export class ImageModule {
}