import { NextFunction, Request, Response } from "express";
// import { ServiceContainer } from "src/lib/shared/infrastructure/ServiceContainer";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { LoanNotFoundError } from "../domain/LoanNotFoundError";
import { LoanCodEmpresa } from "../domain/LoanCodEmpresa";
import { LoanCodPrestamo } from "../domain/LoanCodPrestamo";

export class ExpressLoanController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new LoanCodEmpresa(req.params.codEmpresa);
      const loans = await ServiceContainer.loan.getAll.run(codEmpresa.value);
      return res.json(loans.map((loan) => loan.mapToPrimitives())).status(200);
    } catch (error) {
      if (error instanceof LoanNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new LoanCodEmpresa(req.params.codEmpresa);
      const codPrestamo = new LoanCodPrestamo(Number(req.params.codPrestamo));
      const loan = await ServiceContainer.loan.getById.run(
        codEmpresa.value,
        codPrestamo.value
      );
      return res.json(loan?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof LoanNotFoundError) {
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
        nroDoc,
        razonSocial,
        garante,
        tasaInteres,
        capital,
        nroCuotas,
        seguro,
        gastosAdministrativos,
        fecProcedo,
        fecInicio,
        estado,
        saldoCapital,
        observaciones,
        usuario,
        fecCrea,
        cuotas,
      } = req.body as {
        codEmpresa: string;
        codPrestamo: number;
        nroDoc: string;
        razonSocial: string;
        garante: string;
        tasaInteres: number;
        capital: number;
        nroCuotas: number;
        seguro: number;
        gastosAdministrativos: number;
        fecProcedo: string;
        fecInicio: string;
        estado: string;
        saldoCapital: number;
        observaciones: string;
        usuario: string;
        fecCrea: string;
        cuotas: {
          nroCuota: number;
          fecVencimiento: string;
          monto: number;
          capital: number;
          seguro: number;
          interes: number;
          saldoCapital: number;
          mora: number;
          aInteres: number;
          aSeguro: number;
          aCapital: number;
        }[];
      };
      await ServiceContainer.loan.create.run(
        codEmpresa,
        codPrestamo,
        nroDoc,
        razonSocial,
        garante,
        tasaInteres,
        capital,
        nroCuotas,
        seguro,
        gastosAdministrativos,
        new Date(fecProcedo),
        new Date(fecInicio),
        estado,
        saldoCapital,
        observaciones,
        usuario,
        new Date(fecCrea),
        cuotas.map((c) => ({
          nroCuota: c.nroCuota,
          fecVencimiento: new Date(c.fecVencimiento),
          monto: c.monto,
          capital: c.capital,
          seguro: c.seguro,
          interes: c.interes,
          saldoCapital: c.saldoCapital,
          mora: c.mora,
          aInteres: c.aInteres,
          aSeguro: c.aSeguro,
          aCapital: c.aCapital,
        }))
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
        nroDoc,
        razonSocial,
        garante,
        tasaInteres,
        capital,
        nroCuotas,
        seguro,
        gastosAdministrativos,
        fecProcedo,
        fecInicio,
        estado,
        saldoCapital,
        observaciones,
        usuario,
        fecCrea,
        cuotas,
      } = req.body as {
        codEmpresa: string;
        codPrestamo: number;
        nroDoc: string;
        razonSocial: string;
        garante: string;
        tasaInteres: number;
        capital: number;
        nroCuotas: number;
        seguro: number;
        gastosAdministrativos: number;
        fecProcedo: string;
        fecInicio: string;
        estado: string;
        saldoCapital: number;
        observaciones: string;
        usuario: string;
        fecCrea: string;
        cuotas: {
          nroCuota: number;
          fecVencimiento: string;
          monto: number;
          capital: number;
          seguro: number;
          interes: number;
          saldoCapital: number;
          mora: number;
          aInteres: number;
          aSeguro: number;
          aCapital: number;
        }[];
      };
      await ServiceContainer.loan.update.run(
        codEmpresa,
        codPrestamo,
        nroDoc,
        razonSocial,
        garante,
        tasaInteres,
        capital,
        nroCuotas,
        seguro,
        gastosAdministrativos,
        new Date(fecProcedo),
        new Date(fecInicio),
        estado,
        saldoCapital,
        observaciones,
        usuario,
        new Date(fecCrea),
        cuotas.map((c) => ({
          nroCuota: c.nroCuota,
          fecVencimiento: new Date(c.fecVencimiento),
          monto: c.monto,
          capital: c.capital,
          seguro: c.seguro,
          interes: c.interes,
          saldoCapital: c.saldoCapital,
          mora: c.mora,
          aInteres: c.aInteres,
          aSeguro: c.aSeguro,
          aCapital: c.aCapital,
        }))
      );
      return res.status(204).send();
    } catch (error) {
      if (error instanceof LoanNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.loan.delete.run(
        req.params.codEmpresa,
        Number(req.params.codPrestamo)
      );
      return res.status(204).send();
    } catch (error) {
      if (error instanceof LoanNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
