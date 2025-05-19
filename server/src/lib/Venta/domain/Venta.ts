import { VentaCodEmpresa } from "./VentaCodEmpresa";
import { VentaCodMoneda } from "./VentaCodMoneda";
import { VentaCodTipOperacion } from "./VentaCodTipOperacion";
import { VentaDetraccion } from "./VentaDetraccion";
import { VentaFecEmision } from "./VentaFecEmision";
import { VentaFormaPago } from "./VentaFormaPago";
import { VentaId } from "./VentaId";
import { VentaNroOrdenCompra } from "./VentaNroOrdenCompra";
import { VentaObservaciones } from "./VentaObservaciones";
import { VentaHoraEmision } from "./VentaHoraEmision";
import { VentaCodTipDoc } from "./VentaCodTipDoc";
import { VentaSerieDoc } from "./VentaSerieDoc";
import { VentaNroDoc } from "./VentaNroDoc";
import { VentaCliente } from "./VentaCliente";
import { VentaItem } from "./VentaItem";
import { VentaFecVencimiento } from "./VentaFecVencimiento";
import { VentaCodEstablecimientoEmisor } from "./VentaCodEstablecimientoEmisor";
import { VentaEnvioAutoCli } from "./VentaEnvioAutoCli";
import { VentaTotales } from "./VentaTotales";
import { VentaDatosTransporteCarga } from "./VentaDatosTransporteCarga";
import { VentaFactorTax } from "./VentaFactorTax";
import { VentaAnticipo } from "./VentaAnticipo";
import { VentaTerminosPago } from "./VentaTerminosPago";
import { VentaCuotasCredito } from "./VentaCuotasCredito";

export class Venta {
  id: VentaId;
  codEmpresa: VentaCodEmpresa;
  codTipDoc: VentaCodTipDoc;
  serieDoc: VentaSerieDoc;
  nroDoc: VentaNroDoc;
  CodTipOperacion: VentaCodTipOperacion;
  fecEmision: VentaFecEmision;
  fecVencimiento: VentaFecVencimiento;
  horaEmision: VentaHoraEmision;
  codMoneda: VentaCodMoneda;
  factorTax: VentaFactorTax;
  envioAutoCli: VentaEnvioAutoCli;
  formaPAgo: VentaFormaPago;
  nroOrdenCompra: VentaNroOrdenCompra;
  codEstablecimientoEmisor: VentaCodEstablecimientoEmisor;
  cliente: VentaCliente;
  datosTransporteCarga: VentaDatosTransporteCarga;
  anticipos: VentaAnticipo[];
  totales: VentaTotales;
  detraccion: VentaDetraccion;
  terminosPago: VentaTerminosPago;
  cuotasCredito: VentaCuotasCredito[];
  observaciones: VentaObservaciones;
  items: VentaItem[];

  constructor(
    codEmpresa: VentaCodEmpresa,
    codTipDoc: VentaCodTipDoc,
    serieDoc: VentaSerieDoc,
    nroDoc: VentaNroDoc,
    CodTipOperacion: VentaCodTipOperacion,
    fecEmision: VentaFecEmision,
    fecVencimiento: VentaFecVencimiento,
    horaEmision: VentaHoraEmision,
    codMoneda: VentaCodMoneda,
    factorTax: VentaFactorTax,
    envioAutoCli: VentaEnvioAutoCli,
    formaPAgo: VentaFormaPago,
    nroOrdenCompra: VentaNroOrdenCompra,
    codEstablecimientoEmisor: VentaCodEstablecimientoEmisor, //ofcina principal = 0000
    cliente: VentaCliente,
    datosTransporteCarga: VentaDatosTransporteCarga,
    anticipos: VentaAnticipo[] = [],
    totales: VentaTotales,
    detraccion: VentaDetraccion,
    terminosPago: VentaTerminosPago,
    cuotasCredito: VentaCuotasCredito[] = [],
    observaciones: VentaObservaciones,
    items: VentaItem[] = []
  ) {
    const newId = new VentaId(
      codEmpresa.value + codTipDoc.value + serieDoc.value + nroDoc.value
    );
    this.id = newId;
    this.codEmpresa = codEmpresa;
    this.codTipDoc = codTipDoc;
    this.serieDoc = serieDoc;
    this.nroDoc = nroDoc;
    this.CodTipOperacion = CodTipOperacion;
    this.fecEmision = fecEmision;
    this.fecVencimiento = fecVencimiento;
    this.horaEmision = horaEmision;
    this.codMoneda = codMoneda;
    this.factorTax = factorTax;
    this.envioAutoCli = envioAutoCli;
    this.formaPAgo = formaPAgo;
    this.nroOrdenCompra = nroOrdenCompra;
    this.codEstablecimientoEmisor = codEstablecimientoEmisor; //ofcina principal = 0000
    this.cliente = cliente;
    this.datosTransporteCarga = datosTransporteCarga;
    this.anticipos = anticipos;
    this.totales = totales;
    this.detraccion = detraccion;
    this.terminosPago = terminosPago;
    this.cuotasCredito = cuotasCredito;
    this.observaciones = observaciones;
    this.items = items;
  }

  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      codTipDoc: this.codTipDoc.value,
      serieDoc: this.serieDoc.value,
      nroDoc: this.nroDoc.value,
      CodTipOperacion: this.CodTipOperacion.value,
      fecEmision: this.fecEmision.value,
      fecVencimiento: this.fecVencimiento.value,
      horaEmision: this.horaEmision.value,
      codMoneda: this.codMoneda.value,
      factorTax: this.factorTax.value,
      envioAutoCli: this.envioAutoCli.value,
      formaPAgo: this.formaPAgo.value,
      nroOrdenCompra: this.nroOrdenCompra.value,
      codEstablecimientoEmisor: this.codEstablecimientoEmisor.value, //ofcina principal = 0000
      cliente: this.cliente,
      datosTransporteCarga: this.datosTransporteCarga,
      anticipos: this.anticipos,
      totales: this.totales,
      detraccion: this.detraccion,
      terminosPago: this.terminosPago,
      cuotasCredito: this.cuotasCredito,
      observaciones: this.observaciones.value,
      items: this.items,
    };
  }
}
