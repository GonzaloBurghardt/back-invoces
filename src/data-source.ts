import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [__dirname__+'/entities/*.ts'],
    migrations: [],
    subscribers: [],
})
