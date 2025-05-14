import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { PersonaNotFoundError } from "../domain/PersonaNotFoundError";

export class ExpressPersonaController {
  async getByDni(req: Request, res: Response, next: NextFunction) {
    try {
      const persona = await ServiceContainer.persona.getByDni.run(
        req.params.dni
      );
      return res.json(persona?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof PersonaNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
