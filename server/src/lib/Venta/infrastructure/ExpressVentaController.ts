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
        codTipDocVenta,
        serieDocuVenta,
        nroDocuVenta,
        tipDocCli,
        nroDocCli, //Ruc; dni; ce
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        fecEmision,
        fecVence,
        codMoneda,
        simboloMoneda,
        tipoCambio,
        codTipOperacion,
        cancelado,
        formaPago,
        envioAutoSunat,
        observaciones,
        agentePercepcion,
        detraccion,
        codProDetraccion,
        factorDetraccion,
        importeDetracion,
        importeSubTotal,
        importeDescuentosGlobales,
        importeDescuentos,
        importeOtros,
        importeAnticipos,
        importeValorVenta,
        importeIsc,
        importeIgv,
        importeICBPER,
        importePercepcion,
        importeTotal,
        importeCobrar,
        importeTotalTexto,
        nroOrdenCompra,
        codTipGuiaRemision,
        nroGuiaRemision,
        codTipDocRef,
        nroDocRef,
        codTipDocAnticipo,
        serieDocAnticipo,
        nroDocAnticipo,
        codTipDocCliAnticipo, //catalogo06
        importeAnticipo,
        detalles,
      } = req.body as {
        codEmpresa: string;
        codTipDocVenta: string;
        serieDocuVenta: string;
        nroDocuVenta: string;
        tipDocCli: string;
        nroDocCli: string; //Ruc; dni; ce
        nomComercialCli: string;
        razonSocial: string;
        direccion: string;
        phone: string;
        email: string;
        fecEmision: string;
        fecVence: string;
        codMoneda: string;
        simboloMoneda: string;
        tipoCambio: number;
        codTipOperacion: string;
        cancelado: boolean;
        formaPago: string;
        envioAutoSunat: boolean;
        observaciones: string;
        agentePercepcion: boolean;
        detraccion: boolean;
        codProDetraccion: string;
        factorDetraccion: number;
        importeDetracion: number;
        importeSubTotal: number;
        importeDescuentosGlobales: number;
        importeDescuentos: number;
        importeOtros: number;
        importeAnticipos: number;
        importeValorVenta: number;
        importeIsc: number;
        importeIgv: number;
        importeICBPER: number;
        importePercepcion: number;
        importeTotal: number;
        importeCobrar: number;
        importeTotalTexto: string;
        nroOrdenCompra: string;
        codTipGuiaRemision: string;
        nroGuiaRemision: string;
        codTipDocRef: string;
        nroDocRef: string;
        codTipDocAnticipo: string;
        serieDocAnticipo: string;
        nroDocAnticipo: string;
        codTipDocCliAnticipo: string; //catalogo06
        importeAnticipo: number;
        detalles: {
          item: number;
          codProducto: number;
          codProductoSunat: string;
          nombrePro: string;
          unidad: string;
          cantidad: string;
          codTipPrecio: string; //01=onerosa; 02=no onerosa(gratuito)
          precioSugerido: number; //valor unitario (sin descuentos ni impuestos)
          valorUnitario: number; //valor unitario (sin descuentos ni impuestos)
          subTotal: number;
          ChargeIndicator: boolean; //false=descuento; true=cargo
          codDescuento: string; //00=Descuentos que afectan el IGV/IVAP; 50=cargos
          factorDescuento: number;
          descuento: number;
          valorVenta: number;
          codTributo: string; //1000 IGV;   2000 ISC; 9999 otros
          nombreTributo: string;
          catImpuestos: string; //"E=Exonedado; O=Inafecto; S=IGV";
          codInterTributo: string;
          codTipoAfectacionIgv: string;
          factorIgv: number;
          igv: number;
          indIgv: number; //condición si debe llevar o no igv
          aplicaICBPER: boolean; // si; no
          factorICBPER: string;
          importeICBPER: number;
          precio: number; //Precio Unitario
          codTipSistemaIsc: string; //01 al valor; 02 al volumen; 03 al precio de venta al publico
          factorIsc: number;
          isc: number;
          total: number;
        }[];
      };

      await ServiceContainer.venta.create.run(
        codEmpresa,
        codTipDocVenta,
        serieDocuVenta,
        nroDocuVenta,
        tipDocCli,
        nroDocCli, //Ruc; dni; ce
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        fecEmision,
        fecVence,
        codMoneda,
        simboloMoneda,
        tipoCambio,
        codTipOperacion,
        cancelado,
        formaPago,
        envioAutoSunat,
        observaciones,
        agentePercepcion,
        detraccion,
        codProDetraccion,
        factorDetraccion,
        importeDetracion,
        importeSubTotal,
        importeDescuentosGlobales,
        importeDescuentos,
        importeOtros,
        importeAnticipos,
        importeValorVenta,
        importeIsc,
        importeIgv,
        importeICBPER,
        importePercepcion,
        importeTotal,
        importeCobrar,
        importeTotalTexto,
        nroOrdenCompra,
        codTipGuiaRemision,
        nroGuiaRemision,
        codTipDocRef,
        nroDocRef,
        codTipDocAnticipo,
        serieDocAnticipo,
        nroDocAnticipo,
        codTipDocCliAnticipo, //catalogo06
        importeAnticipo,
        detalles.map((c) => ({
          item: c.item,
          codProducto: c.codProducto,
          codProductoSunat: c.codProductoSunat,
          nombrePro: c.nombrePro,
          unidad: c.unidad,
          cantidad: c.cantidad,
          codTipPrecio: c.codTipPrecio, //01=onerosa; 02=no onerosa(gratuito)
          precioSugerido: c.precioSugerido, //valor unitario (sin descuentos ni impuestos)
          valorUnitario: c.valorUnitario, //valor unitario (sin descuentos ni impuestos)
          subTotal: c.subTotal,
          ChargeIndicator: c.ChargeIndicator, //false=descuento; true=cargo
          codDescuento: c.codDescuento, //00=Descuentos que afectan el IGV/IVAP; 50=cargos
          factorDescuento: c.factorDescuento,
          descuento: c.descuento,
          valorVenta: c.valorVenta,
          codTributo: c.codTributo, //1000 IGV;   2000 ISC; 9999 otros
          nombreTributo: c.nombreTributo,
          catImpuestos: c.catImpuestos, //"E=Exonedado; O=Inafecto; S=IGV";
          codInterTributo: c.codInterTributo,
          codTipoAfectacionIgv: c.codTipoAfectacionIgv,
          factorIgv: c.factorIgv,
          igv: c.igv,
          indIgv: c.indIgv, //condición si debe llevar o no igv
          aplicaICBPER: c.aplicaICBPER, // si; no
          factorICBPER: c.factorICBPER,
          importeICBPER: c.importeICBPER,
          precio: c.precio, //Precio Unitario
          codTipSistemaIsc: c.codTipSistemaIsc, //01 al valor; 02 al volumen; 03 al precio de venta al publico
          factorIsc: c.factorIsc,
          isc: c.isc,
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
        codTipDocVenta,
        serieDocuVenta,
        nroDocuVenta,
        tipDocCli,
        nroDocCli, //Ruc; dni; ce
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        fecEmision,
        fecVence,
        codMoneda,
        simboloMoneda,
        tipoCambio,
        codTipOperacion,
        cancelado,
        formaPago,
        envioAutoSunat,
        observaciones,
        agentePercepcion,
        detraccion,
        codProDetraccion,
        factorDetraccion,
        importeDetracion,
        importeSubTotal,
        importeDescuentosGlobales,
        importeDescuentos,
        importeOtros,
        importeAnticipos,
        importeValorVenta,
        importeIsc,
        importeIgv,
        importeICBPER,
        importePercepcion,
        importeTotal,
        importeCobrar,
        importeTotalTexto,
        nroOrdenCompra,
        codTipGuiaRemision,
        nroGuiaRemision,
        codTipDocRef,
        nroDocRef,
        codTipDocAnticipo,
        serieDocAnticipo,
        nroDocAnticipo,
        codTipDocCliAnticipo, //catalogo06
        importeAnticipo,
        detalles,
      } = req.body as {
        codEmpresa: string;
        codTipDocVenta: string;
        serieDocuVenta: string;
        nroDocuVenta: string;
        tipDocCli: string;
        nroDocCli: string; //Ruc; dni; ce
        nomComercialCli: string;
        razonSocial: string;
        direccion: string;
        phone: string;
        email: string;
        fecEmision: string;
        fecVence: string;
        codMoneda: string;
        simboloMoneda: string;
        tipoCambio: number;
        codTipOperacion: string;
        cancelado: boolean;
        formaPago: string;
        envioAutoSunat: boolean;
        observaciones: string;
        agentePercepcion: boolean;
        detraccion: boolean;
        codProDetraccion: string;
        factorDetraccion: number;
        importeDetracion: number;
        importeSubTotal: number;
        importeDescuentosGlobales: number;
        importeDescuentos: number;
        importeOtros: number;
        importeAnticipos: number;
        importeValorVenta: number;
        importeIsc: number;
        importeIgv: number;
        importeICBPER: number;
        importePercepcion: number;
        importeTotal: number;
        importeCobrar: number;
        importeTotalTexto: string;
        nroOrdenCompra: string;
        codTipGuiaRemision: string;
        nroGuiaRemision: string;
        codTipDocRef: string;
        nroDocRef: string;
        codTipDocAnticipo: string;
        serieDocAnticipo: string;
        nroDocAnticipo: string;
        codTipDocCliAnticipo: string; //catalogo06
        importeAnticipo: number;
        detalles: {
          item: number;
          codProducto: number;
          codProductoSunat: string;
          nombrePro: string;
          unidad: string;
          cantidad: string;
          codTipPrecio: string; //01=onerosa; 02=no onerosa(gratuito)
          precioSugerido: number; //valor unitario (sin descuentos ni impuestos)
          valorUnitario: number; //valor unitario (sin descuentos ni impuestos)
          subTotal: number;
          ChargeIndicator: boolean; //false=descuento; true=cargo
          codDescuento: string; //00=Descuentos que afectan el IGV/IVAP; 50=cargos
          factorDescuento: number;
          descuento: number;
          valorVenta: number;
          codTributo: string; //1000 IGV;   2000 ISC; 9999 otros
          nombreTributo: string;
          catImpuestos: string; //"E=Exonedado; O=Inafecto; S=IGV";
          codInterTributo: string;
          codTipoAfectacionIgv: string;
          factorIgv: number;
          igv: number;
          indIgv: number; //condición si debe llevar o no igv
          aplicaICBPER: boolean; // si; no
          factorICBPER: string;
          importeICBPER: number;
          precio: number; //Precio Unitario
          codTipSistemaIsc: string; //01 al valor; 02 al volumen; 03 al precio de venta al publico
          factorIsc: number;
          isc: number;
          total: number;
        }[];
      };
      await ServiceContainer.venta.update.run(
        codEmpresa,
        codTipDocVenta,
        serieDocuVenta,
        nroDocuVenta,
        tipDocCli,
        nroDocCli, //Ruc; dni; ce
        nomComercialCli,
        razonSocial,
        direccion,
        phone,
        email,
        fecEmision,
        fecVence,
        codMoneda,
        simboloMoneda,
        tipoCambio,
        codTipOperacion,
        cancelado,
        formaPago,
        envioAutoSunat,
        observaciones,
        agentePercepcion,
        detraccion,
        codProDetraccion,
        factorDetraccion,
        importeDetracion,
        importeSubTotal,
        importeDescuentosGlobales,
        importeDescuentos,
        importeOtros,
        importeAnticipos,
        importeValorVenta,
        importeIsc,
        importeIgv,
        importeICBPER,
        importePercepcion,
        importeTotal,
        importeCobrar,
        importeTotalTexto,
        nroOrdenCompra,
        codTipGuiaRemision,
        nroGuiaRemision,
        codTipDocRef,
        nroDocRef,
        codTipDocAnticipo,
        serieDocAnticipo,
        nroDocAnticipo,
        codTipDocCliAnticipo, //catalogo06
        importeAnticipo,
        detalles.map((c) => ({
          item: c.item,
          codProducto: c.codProducto,
          codProductoSunat: c.codProductoSunat,
          nombrePro: c.nombrePro,
          unidad: c.unidad,
          cantidad: c.cantidad,
          codTipPrecio: c.codTipPrecio, //01=onerosa; 02=no onerosa(gratuito)
          precioSugerido: c.precioSugerido, //valor unitario (sin descuentos ni impuestos)
          valorUnitario: c.valorUnitario, //valor unitario (sin descuentos ni impuestos)
          subTotal: c.subTotal,
          ChargeIndicator: c.ChargeIndicator, //false=descuento; true=cargo
          codDescuento: c.codDescuento, //00=Descuentos que afectan el IGV/IVAP; 50=cargos
          factorDescuento: c.factorDescuento,
          descuento: c.descuento,
          valorVenta: c.valorVenta,
          codTributo: c.codTributo, //1000 IGV;   2000 ISC; 9999 otros
          nombreTributo: c.nombreTributo,
          catImpuestos: c.catImpuestos, //"E=Exonedado; O=Inafecto; S=IGV";
          codInterTributo: c.codInterTributo,
          codTipoAfectacionIgv: c.codTipoAfectacionIgv,
          factorIgv: c.factorIgv,
          igv: c.igv,
          indIgv: c.indIgv, //condición si debe llevar o no igv
          aplicaICBPER: c.aplicaICBPER, // si; no
          factorICBPER: c.factorICBPER,
          importeICBPER: c.importeICBPER,
          precio: c.precio, //Precio Unitario
          codTipSistemaIsc: c.codTipSistemaIsc, //01 al valor; 02 al volumen; 03 al precio de venta al publico
          factorIsc: c.factorIsc,
          isc: c.isc,
          total: c.total,
        }))
      );
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
