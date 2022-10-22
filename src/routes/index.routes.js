import { Router } from "express";

import {
  renderProductos,
  agregarProducto,
  renderEdit,
  editarProducto,
  eliminarProducto,
} from "../controllers/productos.controller";

const router = Router();

router.get("/", renderProductos);

router.post("/producto/agregar", agregarProducto);

router.get("/edit/:id", renderEdit);

router.post("/edit/:id", editarProducto);

router.get("/delete/:id", eliminarProducto);

export default router;
