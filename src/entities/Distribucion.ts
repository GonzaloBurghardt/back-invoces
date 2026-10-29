import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Distribucion {

    @PrimaryGeneratedColumn()
    id:string = ''
    @Column()
    lote:string = ''
    @Column()
    cantidad:number = 0


}