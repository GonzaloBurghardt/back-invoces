import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    dni:string = ''
    @Column()
    nombre:string = ''
    @Column()
    apellidos:string = ''
    @Column()
    correoElectronico:string = ''
    @Column()
    telefono:string = '' 
    @Column()
    patata:string = '' 
}
