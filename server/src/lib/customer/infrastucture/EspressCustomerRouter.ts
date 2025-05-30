import { Router } from "express";
import { ExpressCustomerController } from "./ExpressCustomerController";

const controller = new ExpressCustomerController();
const ExpressCustomerRouter = Router();

ExpressCustomerRouter.get("/customers/:codEmpresa", controller.getAll);
ExpressCustomerRouter.get("/customers/:id/", controller.getById);
ExpressCustomerRouter.post("/customers/", controller.create);
ExpressCustomerRouter.put("/customers/", controller.update);
ExpressCustomerRouter.delete("/customers/:id", controller.delete);

export { ExpressCustomerRouter };
