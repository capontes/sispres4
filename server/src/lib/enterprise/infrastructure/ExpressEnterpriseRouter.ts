import { Router } from "express";
import { ExpressEnterpriseController } from "./ExpressEnterpriseController";

const controller = new ExpressEnterpriseController();

const ExpressEnterpriseRouter = Router();

ExpressEnterpriseRouter.get("/Enterprises/:codEmpresa", controller.getAll);
ExpressEnterpriseRouter.get("/Enterprises/:codEmpresa", controller.getById);
ExpressEnterpriseRouter.post("/Enterprises/", controller.create);
ExpressEnterpriseRouter.put("/Enterprises/", controller.update);
ExpressEnterpriseRouter.delete("/Enterprise/:codEmpresa", controller.delete);

export { ExpressEnterpriseRouter };
