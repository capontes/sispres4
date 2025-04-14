import { Router } from "express";
import { ExpressPayController } from "./ExpressPayController";

const controller = new ExpressPayController();

const ExpressPayRouter = Router();

ExpressPayRouter.get("/pays/:codEmpresa", controller.getAll);
ExpressPayRouter.get("/pays/:codEmpresa/:codPrestamo", controller.getById);
ExpressPayRouter.post("/pays/", controller.create);
ExpressPayRouter.put("/pays/", controller.update);
ExpressPayRouter.delete("/pays/:codEmpresa/:codPrestamo", controller.delete);

export { ExpressPayRouter };
