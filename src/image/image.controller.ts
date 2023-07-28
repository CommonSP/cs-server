import {
    Controller, Delete,
    Get,
    HttpStatus,
    Param,
    Post, Query,
    Res,
    StreamableFile,
    UploadedFile,
    UploadedFiles,
    UseInterceptors
} from '@nestjs/common'
import {FileInterceptor, FilesInterceptor} from '@nestjs/platform-express'
import {Response} from 'express'
import * as fs from 'fs'
import {diskStorage} from 'multer'
import {extname, join} from 'path'
import * as process from 'process'
import {ImageService} from "./services/image.service";

@Controller('images')
export class ImageController {
    constructor(private imageService: ImageService) {
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: (req, file, callback) => {
                    const path = `../images/products/${req.query.id}`
                    if (!fs.existsSync(path)) {
                        fs.mkdirSync(path, {recursive: true})
                    }
                    callback(null, path)
                },
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
                    const ext = extname(file.originalname)
                    callback(null, `${file.originalname}-${uniqueSuffix}${ext}`)
                },
            }),
        }),
    )
    async saveProductImage(@Query('category') category: string, @Query('id') id: string, @UploadedFile() file: Express.Multer.File) {
        return await this.imageService.saveImage(file.filename, id, category)
    }

    @Get('product/:id/:name')
    async getProductImage(@Param() params: { id: string; name: string }) {
        const file = fs.createReadStream(join(process.cwd(), '../images/products/' + params.id + '/' + params.name))
        return new StreamableFile(file)
    }
    @Delete()
    async deleteProductImage(){

    }
}
