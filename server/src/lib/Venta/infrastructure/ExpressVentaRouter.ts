import { Router } from "express";
import { ExpressVentaController } from "./ExpressVentaController";

const controller = new ExpressVentaController();

const ExpressVentaRouter = Router();

ExpressVentaRouter.get("/ventas/:codEmpresa/:fecEmision", controller.getAll);
ExpressVentaRouter.get("/ventas/:id", controller.getById);
ExpressVentaRouter.post("/ventas/", controller.create);
ExpressVentaRouter.put("/ventas/", controller.update);

export { ExpressVentaRouter };
