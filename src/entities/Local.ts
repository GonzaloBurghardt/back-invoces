import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Local {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    calle:string = ''
    @Column()
    numero:number = 0

}
