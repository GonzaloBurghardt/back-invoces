import "reflect-metadata"
import { DataSource } from "typeorm"
import { AgenteComercial } from "./entities/AgenteComercial"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "invoice",
    synchronize: true,
    logging: true,
    entities: [__dirnaame + "/entities/*.ts"],
    migrations: [],
    subscribers: [],
})
