import { Entity, PrimaryGeneratedColumn, Column, TableInheritance,ManyToOne} from "typeorm"
import { AgenteComercial } from "./AgenteComercial"
import { Producto } from "./Producto"
@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Transaccion {

    @PrimaryGeneratedColumn()
    id: number = 0
    @Column()
    fecha:Date = new Date
    @Column()
    unidadDeMedida:string = '' //TODO CAMBIERA ENUM
    @Column({ type: 'double' })
    precioDeUnidad:number = 0
    @Column()
    unidad:number = 0
    @Column({ type: 'double' })
    cantidad:number = 0
    @Column({ type: 'double' })
    precioPorUnidadDeMedida:number = 0
    @Column()
    lote:string = ''
    @Column()
    iva:string = ''//TOTO CAMBIAR ENUM
    @ManyToOne(() => AgenteComercial, agente => agente.transacciones)
    agenteComercial!: AgenteComercial
    
    @ManyToOne(() => Producto, producto => producto.transacciones)
    producto!: Producto
}

