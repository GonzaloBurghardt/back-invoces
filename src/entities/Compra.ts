import { Entity, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm"
import { Transaccion } from "./Transaccion";

@ChildEntity()
export class Compra extends Transaccion {
}
