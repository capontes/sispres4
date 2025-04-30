import { Router } from "express";
import { ExpressPayController } from "./ExpressPayController";

const controller = new ExpressPayController();

const ExpressPayRouter = Router();

ExpressPayRouter.get("/pays/:codEmpresa/:codPrestamo", controller.getAll);
ExpressPayRouter.get(
  "/pays/:codEmpresa/:codPrestamo/:codPago",
  controller.getById
);
ExpressPayRouter.post("/pays/", controller.create);
ExpressPayRouter.put("/pays/", controller.update);
ExpressPayRouter.delete(
  "/pays/:codEmpresa/:codPrestamo/:codPago",
  controller.delete
);

export { ExpressPayRouter };
