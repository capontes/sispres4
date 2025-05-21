import { NextFunction, Request, Response } from "express";
import { VentaCodEmpresa } from "../domain/VentaCodEmpresa";
import { VentaFecEmision } from "../domain/VentaFecEmision";
import { LoanNotFoundError } from "../../Loan/domain/LoanNotFoundError";
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer";
import { VentaId } from "../domain/VentaId";

export class ExpressVentaController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const codEmpresa = new VentaCodEmpresa(req.params.codEmpresa);
      const fecEmision = new VentaFecEmision(req.params.fecEmision);
      const ventas = await ServiceContainer.venta.getAll.run(
        codEmpresa,
        fecEmision
      );
      return res
        .json(ventas.map((venta) => venta.mapToPrimitives()))
        .status(200);
    } catch (error) {
      if (error instanceof LoanNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = new VentaId(req.params.id);
      const venta = await ServiceContainer.venta.getById.run(id);
      return res.json(venta?.mapToPrimitives()).status(200);
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
        codTipDoc,
        serieDoc,
        nroDoc,
        CodTipOperacion,
        fecEmision,
        fecVencimiento,
        horaEmision,
        codMoneda,
        factorTax,
        envioAutoCli,
        formaPAgo,
        nroOrdenCompra,
        codEstablecimientoEmisor,
        cliente,
        datosTransporteCarga,
        anticipos,
        totales,
        detraccion,
        terminosPago,
        cuotasCredito,
        observaciones,
        items,
      } = req.body as {
        codEmpresa: string;
        codTipDoc: string;
        serieDoc: string;
        nroDoc: string;
        CodTipOperacion: string;
        fecEmision: string;
        fecVencimiento: string;
        horaEmision: string;
        codMoneda: string;
        factorTax: number;
        envioAutoCli: boolean;
        formaPAgo: string;
        nroOrdenCompra: string;
        codEstablecimientoEmisor: string;
        cliente: {
          tipDoc: string;
          nroDoc: string;
          nomComercial: string;
          razonSocial: string;
          codPais: string;
          ubigeo: string;
          direccion: string;
          email: string;
          phone: string;
        };
        datosTransporteCarga: {
          ubigeoOrigen: string;
          direccionOrigen: string;
          ubigeo_destino: string;
          direccionDestino: string;
          valorRefServicioTransporte: string;
          valorReferencialCargaEfectiva: string;
          valorReferencialCargaUtil: string;
          detalleViaje: string;
        };
        anticipos: {
          codTipoDoc: string;
          serie: string;
          numero: string;
          total: number;
        }[];
        totales: {
          exportacion: number;
          gravadas: number;
          inafectas: number;
          exoneradas: number;
          gratuitas: number;
          Otros: number;
          tax: number;
          venta: number;
          anticipos: number;
          retencion: number;
          codRetencion: number;
          descuentos: {
            codigo: string;
            descripcion: string;
            porcentaje: number;
            monto: number;
            base: number;
          };
        };
        detraccion: {
          codigo: string;
          porcentaje: number;
          monto: number;
          codMetodoPago: string;
          cuentaBancaria: string;
          NombreCuentaBancaria: string;
        };
        terminosPago: { descripcion: String; tipo: String };
        cuotasCredito: { cuota: string; fechaPago: string; importe: number }[];
        observaciones: string;
        items: {
          item: number;
          unidad: string;
          codigo: string;
          descripcion: string;
          codigoProductoSunat: string;
          codigoProductoGsl: string;
          cantidad: string;
          valorUnitario: string;
          precioUnitario: string;
          tipoTax: string;
          totalBaseTax: string;
          totalTax: string;
          total: string;
        }[];
      };

      await ServiceContainer.venta.create.run(
        codEmpresa,
        codTipDoc,
        serieDoc,
        nroDoc,
        CodTipOperacion,
        fecEmision,
        fecVencimiento,
        horaEmision,
        codMoneda,
        factorTax,
        envioAutoCli,
        formaPAgo,
        nroOrdenCompra,
        codEstablecimientoEmisor,
        cliente,
        datosTransporteCarga,
        anticipos.map((c) => ({
          codTipoDoc: c.codTipoDoc,
          serie: c.serie,
          numero: c.numero,
          total: c.total,
        })),
        totales,
        detraccion,
        terminosPago,
        cuotasCredito.map((c) => ({
          cuota: c.cuota,
          fechaPago: c.fechaPago,
          importe: c.importe,
        })),
        observaciones,
        items.map((c) => ({
          item: c.item,
          unidad: c.unidad,
          codigo: c.codigo,
          descripcion: c.descripcion,
          codigoProductoSunat: c.codigoProductoSunat,
          codigoProductoGsl: c.codigoProductoGsl,
          cantidad: c.cantidad,
          valorUnitario: c.valorUnitario,
          precioUnitario: c.precioUnitario,
          tipoTax: c.tipoTax,
          totalBaseTax: c.totalBaseTax,
          totalTax: c.totalTax,
          total: c.total,
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
        codTipDoc,
        serieDoc,
        nroDoc,
        CodTipOperacion,
        fecEmision,
        fecVencimiento,
        horaEmision,
        codMoneda,
        factorTax,
        envioAutoCli,
        formaPAgo,
        nroOrdenCompra,
        codEstablecimientoEmisor,
        cliente,
        datosTransporteCarga,
        anticipos,
        totales,
        detraccion,
        terminosPago,
        cuotasCredito,
        observaciones,
        items,
      } = req.body as {
        codEmpresa: string;
        codTipDoc: string;
        serieDoc: string;
        nroDoc: string;
        CodTipOperacion: string;
        fecEmision: string;
        fecVencimiento: string;
        horaEmision: string;
        codMoneda: string;
        factorTax: number;
        envioAutoCli: boolean;
        formaPAgo: string;
        nroOrdenCompra: string;
        codEstablecimientoEmisor: string;
        cliente: {
          tipDoc: string;
          nroDoc: string;
          nomComercial: string;
          razonSocial: string;
          codPais: string;
          ubigeo: string;
          direccion: string;
          email: string;
          phone: string;
        };
        datosTransporteCarga: {
          ubigeoOrigen: string;
          direccionOrigen: string;
          ubigeo_destino: string;
          direccionDestino: string;
          valorRefServicioTransporte: string;
          valorReferencialCargaEfectiva: string;
          valorReferencialCargaUtil: string;
          detalleViaje: string;
        };
        anticipos: {
          codTipoDoc: string;
          serie: string;
          numero: string;
          total: number;
        }[];
        totales: {
          exportacion: number;
          gravadas: number;
          inafectas: number;
          exoneradas: number;
          gratuitas: number;
          Otros: number;
          tax: number;
          venta: number;
          anticipos: number;
          retencion: number;
          codRetencion: number;
          descuentos: {
            codigo: string;
            descripcion: string;
            porcentaje: number;
            monto: number;
            base: number;
          };
        };
        detraccion: {
          codigo: string;
          porcentaje: number;
          monto: number;
          codMetodoPago: string;
          cuentaBancaria: string;
          NombreCuentaBancaria: string;
        };
        terminosPago: { descripcion: String; tipo: String };
        cuotasCredito: { cuota: string; fechaPago: string; importe: number }[];
        observaciones: string;
        items: {
          item: number;
          unidad: string;
          codigo: string;
          descripcion: string;
          codigoProductoSunat: string;
          codigoProductoGsl: string;
          cantidad: string;
          valorUnitario: string;
          precioUnitario: string;
          tipoTax: string;
          totalBaseTax: string;
          totalTax: string;
          total: string;
        }[];
      };
      await ServiceContainer.venta.update.run(
        codEmpresa,
        codTipDoc,
        serieDoc,
        nroDoc,
        CodTipOperacion,
        fecEmision,
        fecVencimiento,
        horaEmision,
        codMoneda,
        factorTax,
        envioAutoCli,
        formaPAgo,
        nroOrdenCompra,
        codEstablecimientoEmisor,
        cliente,
        datosTransporteCarga,
        anticipos.map((c) => ({
          codTipoDoc: c.codTipoDoc,
          serie: c.serie,
          numero: c.numero,
          total: c.total,
        })),
        totales,
        detraccion,
        terminosPago,
        cuotasCredito.map((c) => ({
          cuota: c.cuota,
          fechaPago: c.fechaPago,
          importe: c.importe,
        })),
        observaciones,
        items.map((c) => ({
          item: c.item,
          unidad: c.unidad,
          codigo: c.codigo,
          descripcion: c.descripcion,
          codigoProductoSunat: c.codigoProductoSunat,
          codigoProductoGsl: c.codigoProductoGsl,
          cantidad: c.cantidad,
          valorUnitario: c.valorUnitario,
          precioUnitario: c.precioUnitario,
          tipoTax: c.tipoTax,
          totalBaseTax: c.totalBaseTax,
          totalTax: c.totalTax,
          total: c.total,
        }))
      );

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
