import { Venta } from "../../domain/Venta";
import { VentaRepository } from "../../domain/VentaRepository";
import { VentaCodEmpresa } from "../../domain/VentaCodEmpresa";
import { VentaCodMoneda } from "../../domain/VentaCodMoneda";
import { VentaCodTipOperacion } from "../../domain/VentaCodTipOperacion";
import { VentaFecEmision } from "../../domain/VentaFecEmision";
import { VentaFormaPago } from "../../domain/VentaFormaPago";
import { VentaNroOrdenCompra } from "../../domain/VentaNroOrdenCompra";
import { VentaObservaciones } from "../../domain/VentaObservaciones";
import { VentaCliente } from "../../domain/VentaCliente";
import { VentaDatosTransporteCarga } from "../../domain/VentaDatosTransporteCarga";
import { VentaAnticipo } from "../../domain/VentaAnticipo";
import { VentaTotales } from "../../domain/VentaTotales";
import { VentaDetraccion } from "../../domain/VentaDetraccion";
import { VentaTerminosPago } from "../../domain/VentaTerminosPago";
import { VentaCuotasCredito } from "../../domain/VentaCuotasCredito";
import { VentaCodTipDoc } from "../../domain/VentaCodTipDoc";
import { VentaSerieDoc } from "../../domain/VentaSerieDoc";
import { VentaNroDoc } from "../../domain/VentaNroDoc";
import { VentaFecVencimiento } from "../../domain/VentaFecVencimiento";
import { VentaHoraEmision } from "../../domain/VentaHoraEmision";
import { VentaFactorTax } from "../../domain/VentaFactorTax";
import { VentaEnvioAutoCli } from "../../domain/VentaEnvioAutoCli";
import { VentaCodEstablecimientoEmisor } from "../../domain/VentaCodEstablecimientoEmisor";
import { VentaItem } from "../../domain/VentaItem";

export class VentaUpdate {
  constructor(private ventaRepository: VentaRepository) {}
  async run(
    codEmpresa: string,
    codTipDoc: string,
    serieDoc: string,
    nroDoc: string,
    CodTipOperacion: string,
    fecEmision: string,
    fecVencimiento: string,
    horaEmision: string,
    codMoneda: string,
    factorTax: number,
    envioAutoCli: boolean,
    formaPAgo: string,
    nroOrdenCompra: string,
    codEstablecimientoEmisor: string,
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
    },
    datosTransporteCarga: {
      ubigeoOrigen: string;
      direccionOrigen: string;
      ubigeo_destino: string;
      direccionDestino: string;
      valorRefServicioTransporte: string;
      valorReferencialCargaEfectiva: string;
      valorReferencialCargaUtil: string;
      detalleViaje: string;
    },
    anticipos: {
      codTipoDoc: string;
      serie: string;
      numero: string;
      total: number;
    }[],
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
    },
    detraccion: {
      codigo: string;
      porcentaje: number;
      monto: number;
      codMetodoPago: string;
      cuentaBancaria: string;
      NombreCuentaBancaria: string;
    },
    terminosPago: { descripcion: String; tipo: String },
    cuotasCredito: { cuota: string; fechaPago: string; importe: number }[],
    observaciones: string,
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
    }[]
  ): Promise<void> {
    const venta = new Venta(
      new VentaCodEmpresa(codEmpresa),
      new VentaCodTipDoc(codTipDoc),
      new VentaSerieDoc(serieDoc),
      new VentaNroDoc(nroDoc),
      new VentaCodTipOperacion(CodTipOperacion),
      new VentaFecEmision(fecEmision),
      new VentaFecVencimiento(fecVencimiento),
      new VentaHoraEmision(horaEmision),
      new VentaCodMoneda(codMoneda),
      new VentaFactorTax(factorTax),
      new VentaEnvioAutoCli(envioAutoCli),
      new VentaFormaPago(formaPAgo),
      new VentaNroOrdenCompra(nroOrdenCompra),
      new VentaCodEstablecimientoEmisor(codEstablecimientoEmisor),
      new VentaCliente(
        cliente.tipDoc,
        cliente.nroDoc,
        cliente.nomComercial,
        cliente.razonSocial,
        cliente.codPais,
        cliente.ubigeo,
        cliente.direccion,
        cliente.email,
        cliente.phone
      ),
      new VentaDatosTransporteCarga(
        datosTransporteCarga.ubigeoOrigen,
        datosTransporteCarga.direccionOrigen,
        datosTransporteCarga.ubigeo_destino,
        datosTransporteCarga.direccionDestino,
        datosTransporteCarga.valorRefServicioTransporte,
        datosTransporteCarga.valorReferencialCargaEfectiva,
        datosTransporteCarga.valorReferencialCargaUtil,
        datosTransporteCarga.detalleViaje
      ),
      anticipos.map(
        (c) => new VentaAnticipo(c.codTipoDoc, c.numero, c.serie, c.total)
      ),
      new VentaTotales(
        totales.exportacion,
        totales.gravadas,
        totales.inafectas,
        totales.exoneradas,
        totales.gratuitas,
        totales.Otros,
        totales.tax,
        totales.venta,
        totales.anticipos,
        totales.retencion,
        totales.codRetencion,
        totales.descuentos
      ),
      new VentaDetraccion(
        detraccion.codigo,
        detraccion.porcentaje,
        detraccion.monto,
        detraccion.codMetodoPago,
        detraccion.cuentaBancaria,
        detraccion.NombreCuentaBancaria
      ),
      new VentaTerminosPago(terminosPago.descripcion, terminosPago.tipo),
      cuotasCredito.map(
        (c) => new VentaCuotasCredito(c.cuota, c.fechaPago, c.importe)
      ),
      new VentaObservaciones(observaciones),
      items.map(
        (c) =>
          new VentaItem(
            c.item,
            c.unidad,
            c.codigo,
            c.descripcion,
            c.codigoProductoSunat,
            c.codigoProductoGsl,
            c.cantidad,
            c.valorUnitario,
            c.precioUnitario,
            c.tipoTax,
            c.totalBaseTax,
            c.totalTax,
            c.total
          )
      )
    );
    const ventaExist = await this.ventaRepository.getById(venta.id);
    if (!ventaExist) throw new Error("Documento de Venta not found");
    return await this.ventaRepository.update(venta);
  }
}
