import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column({type: "double"})
    cantidad:number = 0
    @OneToMany(() => Transaccion, transaccion => transaccion.producto)
    transacciones!: Transaccion[]

}