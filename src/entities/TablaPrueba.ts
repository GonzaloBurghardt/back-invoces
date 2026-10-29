import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TablaPrueba {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    dni:string = ''

}