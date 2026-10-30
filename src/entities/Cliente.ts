import { Entity, PrimaryGeneratedColumn, Column, ChildEntity, OneToMany } from "typeorm"
import { AgenteComercial } from "./AgenteComercial"
import { Local } from "./Local"

@ChildEntity()
export class Cliente extends AgenteComercial {


    @OneToMany(() => Local, (local => local.propietario))
    locales!:Local[]

}
