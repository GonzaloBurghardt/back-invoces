import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Almacen {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column()
    nombre:string = ''
    @Column()
    ubicacion:string = ''


}