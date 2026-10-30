import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Distribucion } from "./Distribucion"
import { Transaccion } from "./Transaccion"

@Entity()
export class Almacen {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column()
    nombre:string = ''
    @Column()
    ubicacion:string = ''

    @OneToMany(() => Distribucion, distribucion => distribucion.almacen)
    distribucion!: Transaccion[]
}