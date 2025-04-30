import { json, NextFunction, Request, Response } from "express";
import { BoxCodEmpresa } from "../domain/BoxCodEmpresa";
import { ServiceContainer } from "src/lib/shared/infrastructure/ServiceContainer";
import { BoxNotFoundError } from "../domain/BoxNotFoundError";
import { BoxMes } from "../domain/Box;Mes";
import { BoxAnio } from "../domain/BoxAnio";

export class ExpressBoxController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new BoxCodEmpresa(req.params.codEmpresa);
      const boxs = await ServiceContainer.box.getAll.run(codEmpresa.value);
      return res.json(boxs.map((box) => box.mapToPrimitives())).status(200);
    } catch (error) {
      if (error instanceof BoxNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new BoxCodEmpresa(req.params.codEmpresa);
      const mes = new BoxMes(req.params.mes);
      const anio = new BoxAnio(req.params.anio);
      const box = await ServiceContainer.box.getById.run(
        codEmpresa.value,
        mes.value,
        anio.value
      );
      return res.json(box?.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof BoxNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        codEmpresa,
        anio,
        mes,
        estado,
        nroMovimientos,
        saldoInicial,
        capitalPrestado,
        capitalCobrado,
        seguroCobrado,
        interesCobrado,
        moraCobrado,
        saldoFinal,
        usuApertura,
        usuCierra,
        fecApertura,
        fecCierre,
        cierreDiario,
      } = req.body as {
        codEmpresa: string;
        anio: string;
        mes: string;
        estado: string;
        nroMovimientos: number;
        saldoInicial: number;
        capitalPrestado: number;
        capitalCobrado: number;
        seguroCobrado: number;
        interesCobrado: number;
        moraCobrado: number;
        saldoFinal: number;
        usuApertura: string;
        usuCierra: string;
        fecApertura: Date;
        fecCierre: Date;
        cierreDiario: {
          diametro: string;
          estadoDia: string; //A=APERTURADO, C=CERRADO
          nroMovientosDia: number;
          saldoInicialDia: number;
          capitalPrestadoDia: number;
          capitalCobradoDia: number;
          seguroCobradoDia: number;
          interesCobradoDia: number;
          moraCobradoDia: number;
          saldoFinalDia: number;
          usuAperturaDia: string;
          usuCierraDia: string;
          fecAperturaDia: Date;
          fecCierreDia: Date;
        }[];
      };
      await ServiceContainer.box.create.run(
        codEmpresa,
        anio,
        mes,
        estado,
        nroMovimientos,
        saldoInicial,
        capitalPrestado,
        capitalCobrado,
        seguroCobrado,
        interesCobrado,
        moraCobrado,
        saldoFinal,
        usuApertura,
        usuCierra,
        new Date(fecApertura),
        new Date(fecCierre),
        cierreDiario.map((c) => ({
          diametro: c.diametro,
          estadoDia: c.estadoDia, //A=APERTURADO, C=CERRADO
          nroMovientosDia: c.nroMovientosDia,
          saldoInicialDia: c.saldoInicialDia,
          capitalPrestadoDia: c.capitalPrestadoDia,
          capitalCobradoDia: c.capitalCobradoDia,
          seguroCobradoDia: c.seguroCobradoDia,
          interesCobradoDia: c.interesCobradoDia,
          moraCobradoDia: c.moraCobradoDia,
          saldoFinalDia: c.saldoFinalDia,
          usuAperturaDia: c.usuAperturaDia,
          usuCierraDia: c.usuCierraDia,
          fecAperturaDia: new Date(c.fecAperturaDia),
          fecCierreDia: new Date(c.fecCierreDia),
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
        anio,
        mes,
        estado,
        nroMovimientos,
        saldoInicial,
        capitalPrestado,
        capitalCobrado,
        seguroCobrado,
        interesCobrado,
        moraCobrado,
        saldoFinal,
        usuApertura,
        usuCierra,
        fecApertura,
        fecCierre,
        cierreDiario,
      } = req.body as {
        codEmpresa: string;
        anio: string;
        mes: string;
        estado: string;
        nroMovimientos: number;
        saldoInicial: number;
        capitalPrestado: number;
        capitalCobrado: number;
        seguroCobrado: number;
        interesCobrado: number;
        moraCobrado: number;
        saldoFinal: number;
        usuApertura: string;
        usuCierra: string;
        fecApertura: Date;
        fecCierre: Date;
        cierreDiario: {
          diametro: string;
          estadoDia: string; //A=APERTURADO, C=CERRADO
          nroMovientosDia: number;
          saldoInicialDia: number;
          capitalPrestadoDia: number;
          capitalCobradoDia: number;
          seguroCobradoDia: number;
          interesCobradoDia: number;
          moraCobradoDia: number;
          saldoFinalDia: number;
          usuAperturaDia: string;
          usuCierraDia: string;
          fecAperturaDia: Date;
          fecCierreDia: Date;
        }[];
      };
      await ServiceContainer.box.update.run(
        codEmpresa,
        anio,
        mes,
        estado,
        nroMovimientos,
        saldoInicial,
        capitalPrestado,
        capitalCobrado,
        seguroCobrado,
        interesCobrado,
        moraCobrado,
        saldoFinal,
        usuApertura,
        usuCierra,
        new Date(fecApertura),
        new Date(fecCierre),
        cierreDiario.map((c) => ({
          diametro: c.diametro,
          estadoDia: c.estadoDia, //A=APERTURADO, C=CERRADO
          nroMovientosDia: c.nroMovientosDia,
          saldoInicialDia: c.saldoInicialDia,
          capitalPrestadoDia: c.capitalPrestadoDia,
          capitalCobradoDia: c.capitalCobradoDia,
          seguroCobradoDia: c.seguroCobradoDia,
          interesCobradoDia: c.interesCobradoDia,
          moraCobradoDia: c.moraCobradoDia,
          saldoFinalDia: c.saldoFinalDia,
          usuAperturaDia: c.usuAperturaDia,
          usuCierraDia: c.usuCierraDia,
          fecAperturaDia: new Date(c.fecAperturaDia),
          fecCierreDia: new Date(c.fecCierreDia),
        }))
      );
      return res.status(201).send();
    } catch (error) {
      if (error instanceof BoxNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.box.delete.run(
        req.params.codEmpresa,
        req.params.mes,
        req.params.anio
      );
      return res.status(204).send();
    } catch (error) {
      if (error instanceof BoxNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
