import { Router } from "express";
import { PayCodEmpresa } from "src/lib/Pay/domain/PayCodEmpresa";
import { Account } from "../domain/Account";

import { ExpressMovementController } from "./ExpressAccountController";

const controller = new ExpressMovementController();
const ExpressAccountRouter = Router();

ExpressAccountRouter.get("/accounts/:codEmpresa", controller.getAll);
ExpressAccountRouter.get(
  "/accounts/:AccountCodEmpresa/:nroDoc",
  controller.getById
);
ExpressAccountRouter.post("/accounts/", controller.create);
ExpressAccountRouter.put("/accounts/", controller.update);
ExpressAccountRouter.delete(
  "/movements/:codEmpresa/:nroDoc",
  controller.delete
);

export { ExpressAccountRouter };
