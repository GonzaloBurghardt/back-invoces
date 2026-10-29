import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column({type: "double"})
    cantidad:number = 0


}