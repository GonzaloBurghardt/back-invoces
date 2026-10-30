import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, OneToMany } from "typeorm"
import { Transaccion } from "./Transaccion"

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Documento {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    nombreEmpresa:string = ''
    @Column()
    nombreCliente:string = ''
    @Column()
    logoEmpresa:string = '' //Aqui va la ruta de la imagen
    @Column()
    fecha:Date = new Date
    @Column()
    nifEmpresa:string = ''
    @Column()
    datos:Transaccion = new Transaccion 
    @OneToMany(() => Transaccion, (transaccion => transaccion.documento))
    transacciones!:Transaccion[]

}