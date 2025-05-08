import { Router } from "express";
import { ExpressPersonaController } from "./ExpressPersonaController";

const controller = new ExpressPersonaController();

const ExpressPersonaRouter = Router();

ExpressPersonaRouter.get("/persona/:dni", controller.getByDni);

export { ExpressPersonaRouter };
