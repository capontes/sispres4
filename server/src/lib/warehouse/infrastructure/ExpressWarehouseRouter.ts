import { Router } from "express";
import { ExpressWarehouseController } from "./ExpressWarehouseController";

const controller = new ExpressWarehouseController();
const ExpressWarehouseRouter = Router();

ExpressWarehouseRouter.get("/warehouse/:codEmpresa", controller.getAll);
ExpressWarehouseRouter.get(
  "/warehouses/:codEmpresa/:codAlm",
  controller.getById
);
ExpressWarehouseRouter.post("/warehouse/", controller.create);
ExpressWarehouseRouter.put("/warehouse/", controller.update);
ExpressWarehouseRouter.delete(
  "/warehouse/:codEmpresa/:nroDoc",
  controller.delete
);

export { ExpressWarehouseRouter };
