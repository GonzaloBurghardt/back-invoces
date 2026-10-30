import { Entity, PrimaryGeneratedColumn, Column, TableInheritance, ChildEntity, ManyToOne } from "typeorm"
import { Documento } from "./Documento"
import { Factura } from "./Factura"

@ChildEntity()
export class Albaran extends Documento {

    @ManyToOne(() => Factura, (factura => factura.albaranes))
    factura!:Factura
    
}