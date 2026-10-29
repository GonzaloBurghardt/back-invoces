import { Entity, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm"
import { AgenteComercial } from "./AgenteComercial"

@ChildEntity()
export class Local extends AgenteComercial {
}
