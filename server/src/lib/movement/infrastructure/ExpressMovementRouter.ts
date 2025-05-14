import { Router } from "express";
import { ExpressMovementController } from "./ExpressMovementController";

const controller = new ExpressMovementController();
const ExpressMovementRouter = Router();

ExpressMovementRouter.get(
  "/movements/:codEmpresa/:fecMovimiento",
  controller.getAll
);
ExpressMovementRouter.get("/movements/:codEmpresa/:nroDoc", controller.getById);
ExpressMovementRouter.post("/movements/", controller.create);
ExpressMovementRouter.put("/movements/", controller.update);
ExpressMovementRouter.delete(
  "/movements/:codEmpresa/:nroDoc",
  controller.delete
);

export { ExpressMovementRouter };
