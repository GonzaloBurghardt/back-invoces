import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"
import { Distribucion } from "./Distribucion"

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column({type: "float"})
    cantidad:number = 0
    @OneToMany(() => Transaccion, transaccion => transaccion.producto)
    transacciones!: Transaccion[]

    @OneToMany(() => Distribucion, distribucion => distribucion.producto)
    distribucion!: Transaccion[]

}