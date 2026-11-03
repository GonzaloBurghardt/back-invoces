import { ProductoController } from "./controllers/ProductoController"

export const RoutesProducto = [{
    method: "get",
    route: "/productos",
    controller: ProductoController,
    action: "all"
}, {
    method: "get",
    route: "/productos/:id",
    controller: ProductoController,
    action: "one"
}, {
    method: "post",
    route: "/productos",
    controller: ProductoController,
    action: "save"
}, {
    method: "delete",
    route: "/productos/:id",
    controller: ProductoController,
    action: "remove"
}]