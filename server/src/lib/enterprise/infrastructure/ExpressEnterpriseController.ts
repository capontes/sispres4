import { NextFunction, Response, Request } from "express";
import { EnterpriseCodEmpresa } from "../domain/EnterpriseCodEmpresa";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { EnterpriseNotFoundError } from "../domain/EnterpriseNotFoundError";

export class ExpressEnterpriseController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new EnterpriseCodEmpresa(req.params.codEmpresa);
      const enterprise = await ServiceContainer.Enterprise.getAll.run(
        codEmpresa.value
      );
      return res
        .json(enterprise.map((enterprise) => enterprise.mapTopPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof EnterpriseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new EnterpriseCodEmpresa(req.params.codEmpresa);
      const enterprise = await ServiceContainer.Enterprise.getById.run(
        codEmpresa.value
      );
      return res.json(enterprise?.mapTopPrimitives()).status(200);
    } catch (error) {
      if (error instanceof EnterpriseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { codEmpresa, razonSocial, parametros } = req.body as {
        codEmpresa: string;
        razonSocial: string;
        parametros: {
          codParam: string;
          desParam: string;
          tipo: string;
          valParam: string;
        }[];
      };
      await ServiceContainer.Enterprise.create.run(
        codEmpresa,
        razonSocial,
        parametros.map((e) => ({
          codParam: e.codParam,
          desParam: e.desParam,
          tipo: e.tipo,
          valParam: e.valParam,
        }))
      );
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { codEmpresa, razonSocial, parametros } = req.body as {
        codEmpresa: string;
        razonSocial: string;
        parametros: {
          codParam: string;
          desParam: string;
          tipo: string;
          valParam: string;
        }[];
      };
      await ServiceContainer.Enterprise.create.run(
        codEmpresa,
        razonSocial,
        parametros.map((e) => ({
          codParam: e.codParam,
          desParam: e.desParam,
          tipo: e.tipo,
          valParam: e.valParam,
        }))
      );
      return res.status(204).send();
    } catch (error) {
      if (error instanceof EnterpriseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.Enterprise.delete.run(req.params.codEmpresa);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof EnterpriseNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
