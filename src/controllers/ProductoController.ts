import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Producto } from "../entities/Producto"


export class ProductoController {

    private productoRepository = AppDataSource.getRepository(Producto)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const producto = await this.productoRepository.findOne({
            where: { id }
        })

        if (!producto) {
            return "unregistered producto"
        }
        return producto
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { cantidad } = request.body;

        const user = Object.assign(new Producto(), {
            cantidad
        })

        return this.productoRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let productoToRemove = await this.productoRepository.findOneBy({ id })

        if (!productoToRemove) {
            return "this user not exist"
        }

        await this.productoRepository.remove(productoToRemove)

        return "producto has been removed"
    }

}  