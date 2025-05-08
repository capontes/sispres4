import { Venta } from "../../domain/Venta";
import { VentaRepository } from "../../domain/VentaRepository";
import { VentaAgentePercepcion } from "../../domain/VentaAgentePercepcion";
import { VentaCancelado } from "../../domain/VentaCancelado";
import { VentaCodEmpresa } from "../../domain/VentaCodEmpresa";
import { VentaCodMoneda } from "../../domain/VentaCodMoneda";
import { VentaCodProDetraccion } from "../../domain/VentaCodProDetraccion";
import { VentaCodTipDocAnticipo } from "../../domain/VentaCodTipDocAnticipo";
import { VentaCodTipDocCliAnticipo } from "../../domain/VentaCodTipDocCliAnticipo";
import { VentaCodTipDocRef } from "../../domain/VentaCodTipDocRef";
import { VentaCodTipDocVenta } from "../../domain/VentaCodTipDocVenta";
import { VentaCodTipGuiaRemision } from "../../domain/VentaCodTipGuiaRemision";
import { VentaCodTipOperacion } from "../../domain/VentaCodTipOperacion";
import { VentaDetalles } from "../../domain/VentaDetalles";
import { VentaDetraccion } from "../../domain/VentaDetraccion";
import { VentaDireccion } from "../../domain/VentaDireccion";
import { VentaEmail } from "../../domain/VentaEmail";
import { VentaEnvioAutoSunat } from "../../domain/VentaEnvioAutoSunat";
import { VentaFactorDetraccion } from "../../domain/VentaFactorDetraccion";
import { VentaFecEmision } from "../../domain/VentaFecEmision";
import { VentaFecVence } from "../../domain/VentaFecVence";
import { VentaFormaPago } from "../../domain/VentaFormaPago";
import { VentaImporteAnticipo } from "../../domain/VentaImporteAnticipo";
import { VentaImporteAnticipos } from "../../domain/VentaImporteAnticipos";
import { VentaImporteCobrar } from "../../domain/VentaImporteCobrar";
import { VentaImporteDescuentos } from "../../domain/VentaImporteDescuentos";
import { VentaImporteDescuentosGlobales } from "../../domain/VentaImporteDescuentosGlobales";
import { VentaImporteDetracion } from "../../domain/VentaImporteDetracion";
import { VentaImporteICBPER } from "../../domain/VentaImporteICBPER";
import { VentaImporteIgv } from "../../domain/VentaImporteIgv";
import { VentaImporteIsc } from "../../domain/VentaImporteIsc";
import { VentaImporteOtros } from "../../domain/VentaImporteOtros";
import { VentaImportePercepcion } from "../../domain/VentaImportePercepcion";
import { VentaImporteSubTotal } from "../../domain/VentaImporteSubTotal";
import { VentaImporteTotal } from "../../domain/VentaImporteTotal";
import { VentaImporteTotalTexto } from "../../domain/VentaImporteTotalTexto";
import { VentaImporteValorVenta } from "../../domain/VentaImporteValorVenta";
import { VentaNomComercialCli } from "../../domain/VentaNomComercialCli";
import { VentaNroDocAnticipo } from "../../domain/VentaNroDocAnticipo";
import { VentaNroDocCli } from "../../domain/VentaNroDocCli";
import { VentaNroDocRef } from "../../domain/VentaNroDocRef";
import { VentaNroDocuVenta } from "../../domain/VentaNroDocuVenta";
import { VentaNroGuiaRemision } from "../../domain/VentaNroGuiaRemision";
import { VentaNroOrdenCompra } from "../../domain/VentaNroOrdenCompra";
import { VentaObservaciones } from "../../domain/VentaObservaciones";
import { VentaPhone } from "../../domain/VentaPhone";
import { VentaRazonSocial } from "../../domain/VentaRazonSocial";
import { VentaSerieDocAnticipo } from "../../domain/VentaSerieDocAnticipo";
import { VentaSerieDocuVenta } from "../../domain/VentaSerieDocuVenta";
import { VentaSimboloMoneda } from "../../domain/VentaSimboloMoneda";
import { VentaTipDocCli } from "../../domain/VentaTipDocCli";
import { VentaTipoCambio } from "../../domain/VentaTipoCambio";
import { VentaId } from "../../domain/VentaId";

export class VentaUpdate {
  constructor(private ventaRepository: VentaRepository) {}
  async run(
    codEmpresa: string,
    codTipDocVenta: string,
    serieDocuVenta: string,
    nroDocuVenta: string,
    tipDocCli: string,
    nroDocCli: string, //Ruc, dni, ce
    nomComercialCli: string,
    razonSocial: string,
    direccion: string,
    phone: string,
    email: string,
    fecEmision: string,
    fecVence: string,
    codMoneda: string,
    simboloMoneda: string,
    tipoCambio: number,
    codTipOperacion: string,
    cancelado: boolean,
    formaPago: string,
    envioAutoSunat: boolean,
    observaciones: string,
    agentePercepcion: boolean,
    detraccion: boolean,
    codProDetraccion: string,
    factorDetraccion: number,
    importeDetracion: number,
    importeSubTotal: number,
    importeDescuentosGlobales: number,
    importeDescuentos: number,
    importeOtros: number,
    importeAnticipos: number,
    importeValorVenta: number,
    importeIsc: number,
    importeIgv: number,
    importeICBPER: number,
    importePercepcion: number,
    importeTotal: number,
    importeCobrar: number,
    importeTotalTexto: string,
    nroOrdenCompra: string,
    codTipGuiaRemision: string,
    nroGuiaRemision: string,
    codTipDocRef: string,
    nroDocRef: string,
    codTipDocAnticipo: string,
    serieDocAnticipo: string,
    nroDocAnticipo: string,
    codTipDocCliAnticipo: string, //catalogo06
    importeAnticipo: number,
    detalles: {
      item: number;
      codProducto: number;
      codProductoSunat: string;
      nombrePro: string;
      unidad: string;
      cantidad: string;
      codTipPrecio: string; //01=onerosa, 02=no onerosa(gratuito)
      precioSugerido: number; //valor unitario (sin descuentos ni impuestos)
      valorUnitario: number; //valor unitario (sin descuentos ni impuestos)
      subTotal: number;
      ChargeIndicator: boolean; //false=descuento, true=cargo
      codDescuento: string; //00=Descuentos que afectan el IGV/IVAP, 50=cargos
      factorDescuento: number;
      descuento: number;
      valorVenta: number;
      codTributo: string; //1000 IGV,   2000 ISC, 9999 otros
      nombreTributo: string;
      catImpuestos: string; //"E=Exonedado, O=Inafecto, S=IGV",
      codInterTributo: string;
      codTipoAfectacionIgv: string;
      factorIgv: number;
      igv: number;
      indIgv: number; //condición si debe llevar o no igv
      aplicaICBPER: boolean; // si, no
      factorICBPER: string;
      importeICBPER: number;
      precio: number; //Precio Unitario
      codTipSistemaIsc: string; //01 al valor, 02 al volumen, 03 al precio de venta al publico
      factorIsc: number;
      isc: number;
      total: number;
    }[]
  ): Promise<void> {
    const venta = new Venta(
      new VentaCodEmpresa(codEmpresa),
      new VentaCodTipDocVenta(codTipDocVenta),
      new VentaSerieDocuVenta(serieDocuVenta),
      new VentaNroDocuVenta(nroDocuVenta),
      new VentaTipDocCli(tipDocCli),
      new VentaNroDocCli(nroDocCli), //Ruc, dni, ce
      new VentaNomComercialCli(nomComercialCli),
      new VentaRazonSocial(razonSocial),
      new VentaDireccion(direccion),
      new VentaPhone(phone),
      new VentaEmail(email),
      new VentaFecEmision(fecEmision),
      new VentaFecVence(fecVence),
      new VentaCodMoneda(codMoneda),
      new VentaSimboloMoneda(simboloMoneda),
      new VentaTipoCambio(tipoCambio),
      new VentaCodTipOperacion(codTipOperacion),
      new VentaCancelado(cancelado),
      new VentaFormaPago(formaPago),
      new VentaEnvioAutoSunat(envioAutoSunat),
      new VentaObservaciones(observaciones),
      new VentaAgentePercepcion(agentePercepcion),
      new VentaDetraccion(detraccion),
      new VentaCodProDetraccion(codProDetraccion),
      new VentaFactorDetraccion(factorDetraccion),
      new VentaImporteDetracion(importeDetracion),
      new VentaImporteSubTotal(importeSubTotal),
      new VentaImporteDescuentosGlobales(importeDescuentosGlobales),
      new VentaImporteDescuentos(importeDescuentos),
      new VentaImporteOtros(importeOtros),
      new VentaImporteAnticipos(importeAnticipos),
      new VentaImporteValorVenta(importeValorVenta),
      new VentaImporteIsc(importeIsc),
      new VentaImporteIgv(importeIgv),
      new VentaImporteICBPER(importeICBPER),
      new VentaImportePercepcion(importePercepcion),
      new VentaImporteTotal(importeTotal),
      new VentaImporteCobrar(importeCobrar),
      new VentaImporteTotalTexto(importeTotalTexto),
      new VentaNroOrdenCompra(nroOrdenCompra),
      new VentaCodTipGuiaRemision(codTipGuiaRemision),
      new VentaNroGuiaRemision(nroGuiaRemision),
      new VentaCodTipDocRef(codTipDocRef),
      new VentaNroDocRef(nroDocRef),
      new VentaCodTipDocAnticipo(codTipDocAnticipo), //02 fv, 03 bv emitida x anticipo. catalogo12
      new VentaSerieDocAnticipo(serieDocAnticipo),
      new VentaNroDocAnticipo(nroDocAnticipo),
      new VentaCodTipDocCliAnticipo(codTipDocCliAnticipo), //catalogo06
      new VentaImporteAnticipo(importeAnticipo),
      detalles.map(
        (c) =>
          new VentaDetalles(
            c.item,
            c.codProducto,
            c.codProductoSunat,
            c.nombrePro,
            c.unidad,
            c.cantidad,
            c.codTipPrecio, //01=onerosa, 02=no onerosa(gratuito)
            c.precioSugerido, //valor unitario (sin descuentos ni impuestos)
            c.valorUnitario, //valor unitario (sin descuentos ni impuestos)
            c.subTotal,
            c.ChargeIndicator, //false=descuento, true=cargo
            c.codDescuento, //00=Descuentos que afectan el IGV/IVAP, 50=cargos
            c.factorDescuento,
            c.descuento,
            c.valorVenta,
            c.codTributo, //1000 IGV,   2000 ISC, 9999 otros
            c.nombreTributo,
            c.catImpuestos, //"E=Exonedado, O=Inafecto, S=IGV",
            c.codInterTributo,
            c.codTipoAfectacionIgv,
            c.factorIgv,
            c.igv,
            c.indIgv, //condición si debe llevar o no igv
            c.aplicaICBPER, // si, no
            c.factorICBPER,
            c.importeICBPER,
            c.precio, //Precio Unitario
            c.codTipSistemaIsc, //01 al valor, 02 al volumen, 03 al precio de venta al publico
            c.factorIsc,
            c.isc,
            c.total
          )
      )
    );
    const ventaExist = await this.ventaRepository.getById(
      new VentaId(venta.id)
    );
    if (!ventaExist) throw new Error("Documento de Venta not found");
    return await this.ventaRepository.update(venta);
  }
}
