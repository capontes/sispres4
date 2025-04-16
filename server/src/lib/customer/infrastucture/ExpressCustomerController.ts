import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { CustomerCodEmpresa } from "../domain/CustomerCodEmpresa";
import { CustomerNotFoundError } from "../domain/CustomerNotFoundError";
import { CustomerNroDoc } from "../domain/CustomerNroDoc";

export class ExpressCustomerController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new CustomerCodEmpresa(req.params.codEmpresa);
      const customers = await ServiceContainer.Customer.getAll.run(
        codEmpresa.value
      );
      return res
        .json(customers.map((customer) => customer.mapToPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof CustomerNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new CustomerCodEmpresa(req.params.codEmpresa);
      const nroDoc = new CustomerNroDoc(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      const customer = await ServiceContainer.Customer.getById.run(id);
      return res.json(customer?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof CustomerNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        tipoDoc,
        nroDoc,
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        garante,
        evaluacion,
        tasaInteres,
        tasaMora,
        estado,
        garantia,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        tipoDoc: string;
        nroDoc: string;
        nomComercialCli: string;
        razonSocial: string;
        direccion: string;
        phone: string;
        email: string;
        garante: string;
        evaluacion: string;
        tasaInteres: number;
        tasaMora: number;
        estado: string;
        garantia: string;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.Customer.create.run(
        codEmpresa,
        tipoDoc,
        nroDoc,
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        garante,
        evaluacion,
        tasaInteres,
        tasaMora,
        estado,
        garantia,
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
        tipoDoc,
        nroDoc,
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        garante,
        evaluacion,
        tasaInteres,
        tasaMora,
        estado,
        garantia,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        tipoDoc: string;
        nroDoc: string;
        nomComercialCli: string;
        razonSocial: string;
        direccion: string;
        phone: string;
        email: string;
        garante: string;
        evaluacion: string;
        tasaInteres: number;
        tasaMora: number;
        estado: string;
        garantia: string;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.Customer.update.run(
        codEmpresa,
        tipoDoc,
        nroDoc,
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        garante,
        evaluacion,
        tasaInteres,
        tasaMora,
        estado,
        garantia,
        usuario,
        observaciones
      );

      return res.status(204).send();
    } catch (error) {
      if (error instanceof CustomerNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new CustomerCodEmpresa(req.params.codEmpresa);
      const nroDoc = new CustomerNroDoc(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      await ServiceContainer.Customer.delete.run(id);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof CustomerNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
