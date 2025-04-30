import { Request, Response, NextFunction } from "express";
import { Account } from "../domain/Account";
import { AccountCodEmpresa } from "../domain/AccountCodEmpresa";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { AccountNotFoundError } from "../domain/AccountNotFoundError";
import { AccountNroDoc } from "../domain/AccountNroDoc";

export class ExpressMovementController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new AccountCodEmpresa(req.params.codEmpresa);
      const Accounts = await ServiceContainer.account.getAll.run(
        codEmpresa.value
      );
      return res
        .json(Accounts.map((account) => account.mapTopPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof AccountNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new AccountCodEmpresa(req.params.codEmpresa);
      const nroDoc = new AccountNroDoc(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      const account = await ServiceContainer.account.getById.run(id);
      return res.json(account?.mapTopPrimitives()).status(200);
    } catch (error) {
      if (error instanceof AccountNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        nroCuenta,
        nroDoc,
        razonSocial,
        fecApertura,
        tipoCuenta,
        moneda,
        capital,
        fecRegenera,
        modoInteres,
        tasaInteres,
        diaGeneraInteres,
        fecMinCierre,
        interes,
        aInteres,
        penalizidad,
        liquidacion,
        saldo,
        aSaldo,
        fecCrea,
        estado,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        nroCuenta: number;
        nroDoc: string;
        razonSocial: string;
        fecApertura: Date;
        tipoCuenta: string;
        moneda: string;
        capital: number;
        fecRegenera: Date;
        modoInteres: string;
        tasaInteres: number;
        diaGeneraInteres: number;
        fecMinCierre: Date;
        interes: number;
        aInteres: number;
        penalizidad: string;
        liquidacion: number;
        saldo: number;
        aSaldo: number;
        fecCrea: Date;
        estado: string;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.account.create.run(
        codEmpresa,
        nroCuenta,
        nroDoc,
        razonSocial,
        fecApertura,
        tipoCuenta,
        moneda,
        capital,
        fecRegenera,
        modoInteres,
        tasaInteres,
        diaGeneraInteres,
        fecMinCierre,
        interes,
        aInteres,
        penalizidad,
        liquidacion,
        saldo,
        aSaldo,
        fecCrea,
        estado,
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
        nroCuenta,
        nroDoc,
        razonSocial,
        fecApertura,
        tipoCuenta,
        moneda,
        capital,
        fecRegenera,
        modoInteres,
        tasaInteres,
        diaGeneraInteres,
        fecMinCierre,
        interes,
        aInteres,
        penalizidad,
        liquidacion,
        saldo,
        aSaldo,
        fecCrea,
        estado,
        usuario,
        observaciones,
      } = req.body as {
        codEmpresa: string;
        nroCuenta: number;
        nroDoc: string;
        razonSocial: string;
        fecApertura: Date;
        tipoCuenta: string;
        moneda: string;
        capital: number;
        fecRegenera: Date;
        modoInteres: string;
        tasaInteres: number;
        diaGeneraInteres: number;
        fecMinCierre: Date;
        interes: number;
        aInteres: number;
        penalizidad: string;
        liquidacion: number;
        saldo: number;
        aSaldo: number;
        fecCrea: Date;
        estado: string;
        usuario: string;
        observaciones: string;
      };
      await ServiceContainer.account.update.run(
        codEmpresa,
        nroCuenta,
        nroDoc,
        razonSocial,
        fecApertura,
        tipoCuenta,
        moneda,
        capital,
        fecRegenera,
        modoInteres,
        tasaInteres,
        diaGeneraInteres,
        fecMinCierre,
        interes,
        aInteres,
        penalizidad,
        liquidacion,
        saldo,
        aSaldo,
        fecCrea,
        estado,
        usuario,
        observaciones
      );
      return res.status(200).send();
    } catch (error) {
      if (error instanceof AccountNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new AccountCodEmpresa(req.params.codEmpresa);
      const nroDoc = new AccountNroDoc(req.params.nroDoc);
      const id = codEmpresa.value + nroDoc.value;
      await ServiceContainer.account.delete.run(id);
      return res.status(200).send();
    } catch (error) {
      if (error instanceof AccountNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
