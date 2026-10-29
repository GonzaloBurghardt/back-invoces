import { Entity, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm"
import { Transaccion } from "./Transaccion"

@ChildEntity()
export class Venta extends Transaccion {
}
