import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, ChildEntity } from "typeorm"
import { Documento } from "./Documento"

@ChildEntity()
export class Albaran extends Documento {
    
}