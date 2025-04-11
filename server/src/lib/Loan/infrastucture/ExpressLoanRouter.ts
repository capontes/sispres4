import { Router } from "express";
import { ExpressLoanController } from "./ExpressLoanController";

const controller = new ExpressLoanController();

const ExpressLoanRouter = Router();

ExpressLoanRouter.get("/loan/", controller.getAll);
ExpressLoanRouter.get("/loan/:id/", controller.getById);
ExpressLoanRouter.post("/loan/", controller.create);
ExpressLoanRouter.put("/loan/", controller.update);
ExpressLoanRouter.delete("/loan/:id", controller.delete);

export { ExpressLoanRouter };
