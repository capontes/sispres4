import { NextFunction, Request, Response } from "express";
import { WarehouseCodEmpresa } from "../domain/WarehouseCodEmpresa";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { WarehouseNotFoundError } from "../domain/WarehouseNotFoundError";
import { WarehouseCodAlm } from "../domain/WarehouseCodAlm";

export class ExpressWarehouseController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new WarehouseCodEmpresa(req.params.codEmpresa);
      const warehouse = await ServiceContainer.warehouse.getAll.run(
        codEmpresa.value
      );
      return res
        .json(warehouse.map((warehouse) => warehouse.mapTopPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof WarehouseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new WarehouseCodEmpresa(req.params.codEmpresa);
      const codAlm = new WarehouseCodAlm(req.params.codAlm);
      const id = codEmpresa.value + codAlm.value;
      const warehouse = await ServiceContainer.warehouse.getById.run(id);
      return res.json(warehouse?.mapTopPrimitives()).status(200);
    } catch (error) {
      if (error instanceof WarehouseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { codEmpresa, codAlm, nomAlmacen, direccion, estado } =
        req.body as {
          codEmpresa: string;
          codAlm: string;
          nomAlmacen: string;
          direccion: string;
          estado: string;
        };
      await ServiceContainer.warehouse.create.run(
        codEmpresa,
        codAlm,
        nomAlmacen,
        direccion,
        estado
      );
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { codEmpresa, codAlm, nomAlmacen, direccion, estado } =
        req.body as {
          codEmpresa: string;
          codAlm: string;
          nomAlmacen: string;
          direccion: string;
          estado: string;
        };
      await ServiceContainer.warehouse.update.run(
        codEmpresa,
        codAlm,
        nomAlmacen,
        direccion,
        estado
      );
      return res.status(200).send();
    } catch (error) {
      if (error instanceof WarehouseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new WarehouseCodEmpresa(req.params.codEmpresa);
      const codAlm = new WarehouseCodAlm(req.params.codAlm);
      const id = codEmpresa.value + codAlm.value;
      await ServiceContainer.warehouse.delete.run(id);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof WarehouseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
