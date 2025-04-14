import { Router } from "express";
import { ExpressLoanController } from "./ExpressLoanController";

const controller = new ExpressLoanController();

const ExpressLoanRouter = Router();

ExpressLoanRouter.get("/loans/:codEmpresa", controller.getAll);
ExpressLoanRouter.get("/loans/:codEmpresa/:codPrestamo", controller.getById);
ExpressLoanRouter.post("/loans/", controller.create);
ExpressLoanRouter.put("/loans/", controller.update);
ExpressLoanRouter.delete("/loans/:codEmpresa/:codPrestamo", controller.delete);

export { ExpressLoanRouter };
