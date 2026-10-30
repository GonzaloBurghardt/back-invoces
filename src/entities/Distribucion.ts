import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Producto } from "./Producto"
import { Almacen } from "./Almacen"

@Entity()
export class Distribucion {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column()
    lote:string = ''
    @Column()
    cantidad:number = 0

    @ManyToOne(() => Producto, producto => producto.distribucion)
    producto!: Producto
    @ManyToOne(() => Almacen, almacen => almacen.distribucion)
    almacen!: Producto

}