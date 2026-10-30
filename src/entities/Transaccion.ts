import { Entity, PrimaryGeneratedColumn, Column, TableInheritance,ManyToOne} from "typeorm"
import { AgenteComercial } from "./AgenteComercial"
import { Producto } from "./Producto"
import { Documento } from "./Documento"
import { Iva } from "./Iva"
import { UnidadDeMedida } from "./UnidadDeMedida"
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Transaccion {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    fecha:Date = new Date
    @Column({
    type: 'enum',
    enum: UnidadDeMedida,
    default: UnidadDeMedida.UNIDAD})
    unidadDeMedida!: UnidadDeMedida;
    @Column({ type: 'float' })
    precioDeUnidad:number = 0
    @Column()
    unidad:number = 0
    @Column({ type: 'float' })
    cantidad:number = 0
    @Column({ type: 'float' })
    precioPorUnidadDeMedida:number = 0
    @Column()
    lote:string = ''
    @Column({
    type: 'enum',
    enum: Iva,
    default: Iva.VEINTIUNO})
    iva!: Iva;
    @ManyToOne(() => AgenteComercial, agente => agente.transacciones)
    agenteComercial!: AgenteComercial
    
    @ManyToOne(() => Producto, producto => producto.transacciones)
    producto!: Producto

    @ManyToOne(() => Documento, (documento => documento.transacciones))
    documento!:Documento
}

