import { Router } from "express";
import { ExpressBoxController } from "./ExpressBoxController";

const controller = new ExpressBoxController();
const ExpressBoxRouter = Router();

ExpressBoxRouter.get("/boxs/:codEmpresa", controller.getAll);
ExpressBoxRouter.get("/boxs/:codEmpresa/:mes/:anio", controller.getById);
ExpressBoxRouter.post("/boxs", controller.create);
ExpressBoxRouter.put("/boxs", controller.update);
ExpressBoxRouter.delete("/boxs/:codEmpresa/:mes/:anio", controller.delete);

export { ExpressBoxRouter };
