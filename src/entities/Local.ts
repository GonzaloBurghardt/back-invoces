import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Cliente } from "./Cliente"

@Entity()
export class Local {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    calle:string = ''
    @Column()
    numero:number = 0

    @ManyToOne(() => Cliente, (cliente => cliente.locales))
    propietario:Cliente

}
