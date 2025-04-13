import { Router } from "express";
import { ExpressTaskController } from "./ExpressTaskController";

const controller = new ExpressTaskController();

const ExpressTaskRouter = Router();

ExpressTaskRouter.get("/tasks/", controller.getAll);
ExpressTaskRouter.get("/tasks/:id/", controller.getById);
ExpressTaskRouter.post("/tasks/", controller.create);
ExpressTaskRouter.put("/tasks/", controller.update);
ExpressTaskRouter.delete("/tasks/:id", controller.delete);

export { ExpressTaskRouter };
