import { NextFunction, Request, Response } from "express";
import { MovementCodEmpresa } from "../domain/MovementCodEmpresa";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { MovementNotFoundError } from "../domain/MovemenNotFoundError";

export class ExpressMovementController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new MovementCodEmpresa(req.params.codEmpresa);
      const fecMovimiento = new MovementCodEmpresa(req.params.fecMovimiento);
      const movements = await ServiceContainer.movement.getAll.run(
        codEmpresa.value,
        fecMovimiento.value
      );
      return res
        .json(movements.map((movement) => movement.mapToPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof MovementNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new MovementCodEmpresa(req.params.codEmpresa);
      const nroDoc = new MovementCodEmpresa(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      const movement = await ServiceContainer.movement.getById.run(id);
      return res.json(movement?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof MovementNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        nroOperacion,
        nroCuenta,
        tipoDoc,
        nroDoc,
        razonSocial,
        tipoCuenta,
        tipoOperacion,
        fecMovimiento,
        importe,
        fecCrea,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        nroOperacion: number;
        nroCuenta: number;
        tipoDoc: string;
        nroDoc: string;
        razonSocial: string;
        tipoCuenta: string;
        tipoOperacion: string;
        fecMovimiento: Date;
        importe: number;
        fecCrea: Date;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.movement.create.run(
        codEmpresa,
        nroOperacion,
        nroCuenta,
        tipoDoc,
        nroDoc,
        razonSocial,
        tipoCuenta,
        tipoOperacion,
        fecMovimiento,
        importe,
        fecCrea,
        usuario,
        observaciones
      );
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        nroOperacion,
        nroCuenta,
        tipoDoc,
        nroDoc,
        razonSocial,
        tipoCuenta,
        tipoOperacion,
        fecMovimiento,
        importe,
        fecCrea,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        nroOperacion: number;
        nroCuenta: number;
        tipoDoc: string;
        nroDoc: string;
        razonSocial: string;
        tipoCuenta: string;
        tipoOperacion: string;
        fecMovimiento: Date;
        importe: number;
        fecCrea: Date;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.movement.update.run(
        codEmpresa,
        nroOperacion,
        nroCuenta,
        tipoDoc,
        nroDoc,
        razonSocial,
        tipoCuenta,
        tipoOperacion,
        fecMovimiento,
        importe,
        fecCrea,
        usuario,
        observaciones
      );
      return res.status(200).send();
    } catch (error) {
      if (error instanceof MovementNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new MovementCodEmpresa(req.params.codEmpresa);
      const nroDoc = new MovementCodEmpresa(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      await ServiceContainer.movement.delete.run(id);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof MovementNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
