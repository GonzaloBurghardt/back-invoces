import { UserController } from "./controllers/UserController"
import { RoutesUser } from "./routes user"
import { RoutesProducto } from "./routesProducto"

export const Routes = [...RoutesProducto, ...RoutesUser]