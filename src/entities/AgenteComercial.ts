import { Entity, PrimaryGeneratedColumn, Column, TableInheritance } from "typeorm"

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })

export class AgenteComercial {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    nombre:string = ''
}
