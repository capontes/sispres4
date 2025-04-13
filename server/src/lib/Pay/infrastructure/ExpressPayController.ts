import { NextFunction, Request, Response } from "express";
import { PayNotFoundError } from "../domain/PayNotFoundError";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";

export class ExpressPayController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    console.log("getALl", req.params.codEmpresa);
    try {
      const pays = await ServiceContainer.pay.getAll.run(req.params.codEmpresa);
      return res.json(pays.map((pay) => pay.mapToPrimitives())).status(200);
    } catch (error) {
      if (error instanceof PayNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = req.body.codEmpresa;
      const codPrestamo = Number(req.body.codPrestamo);
      const pay = await ServiceContainer.pay.getById.run(
        codEmpresa,
        codPrestamo
      );
      return res.json(pay?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof PayNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        codPrestamo,
        nroCuota,
        nroCuotas,
        nroDoc,
        razonSocial,
        garante,
        monto,
        fecVencimiento,
        fecPago,
        diasRetraso,
        capital,
        seguro,
        interes,
        tasaMora,
        mora,
        totalPagar,
        importe,
        saldoCapital,
        tipoPago,
        observaciones,
        usuario,
        fecCrea,
      } = req.body as {
        codEmpresa: string;
        codPrestamo: number;
        nroCuota: number;
        nroCuotas: number;
        nroDoc: string;
        razonSocial: string;
        garante: string;
        monto: number;
        fecVencimiento: string;
        fecPago: string;
        diasRetraso: number;
        capital: number;
        seguro: number;
        interes: number;
        tasaMora: number;
        mora: number;
        totalPagar: number;
        importe: number;
        saldoCapital: number;
        tipoPago: string;
        observaciones: string;
        usuario: string;
        fecCrea: string;
      };
      await ServiceContainer.pay.create.run(
        codEmpresa,
        codPrestamo,
        nroCuota,
        nroCuotas,
        nroDoc,
        razonSocial,
        garante,
        monto,
        new Date(fecVencimiento),
        new Date(fecPago),
        diasRetraso,
        capital,
        seguro,
        interes,
        tasaMora,
        mora,
        totalPagar,
        importe,
        saldoCapital,
        tipoPago,
        observaciones,
        usuario,
        new Date(fecCrea)
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
        codPrestamo,
        nroCuota,
        nroCuotas,
        nroDoc,
        razonSocial,
        garante,
        monto,
        fecVencimiento,
        fecPago,
        diasRetraso,
        capital,
        seguro,
        interes,
        tasaMora,
        mora,
        totalPagar,
        importe,
        saldoCapital,
        tipoPago,
        observaciones,
        usuario,
        fecCrea,
      } = req.body as {
        codEmpresa: string;
        codPrestamo: number;
        nroCuota: number;
        nroCuotas: number;
        nroDoc: string;
        razonSocial: string;
        garante: string;
        monto: number;
        fecVencimiento: string;
        fecPago: string;
        diasRetraso: number;
        capital: number;
        seguro: number;
        interes: number;
        tasaMora: number;
        mora: number;
        totalPagar: number;
        importe: number;
        saldoCapital: number;
        tipoPago: string;
        observaciones: string;
        usuario: string;
        fecCrea: string;
      };
      await ServiceContainer.pay.update.run(
        codEmpresa,
        codPrestamo,
        nroCuota,
        nroCuotas,
        nroDoc,
        razonSocial,
        garante,
        monto,
        new Date(fecVencimiento),
        new Date(fecPago),
        diasRetraso,
        capital,
        seguro,
        interes,
        tasaMora,
        mora,
        totalPagar,
        importe,
        saldoCapital,
        tipoPago,
        observaciones,
        usuario,
        new Date(fecCrea)
      );
      res.status(204).send();
    } catch (error) {
      if (error instanceof PayNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = req.body.codEmpresa;
      const codPrestamo = Number(req.body.codPrestamo);
      const id = codEmpresa + codPrestamo;
      await ServiceContainer.pay.delete.run(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof PayNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
