import { Entity, PrimaryGeneratedColumn, Column, TableInheritance,OneToMany} from "typeorm"
import { Transaccion } from "./Transaccion"
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })

export class AgenteComercial {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    nombre:string = ''
    @OneToMany(() => Transaccion, transaccion => transaccion.agenteComercial)
    transacciones!: Transaccion[]

    
}
