import "reflect-metadata"
import { DataSource } from "typeorm"
import { AgenteComercial } from "./entities/AgenteComercial"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "password",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [AgenteComercial],
    migrations: [],
    subscribers: [],
})
