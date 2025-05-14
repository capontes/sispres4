import { VentaAgentePercepcion } from "./VentaAgentePercepcion";
import { VentaCancelado } from "./VentaCancelado";
import { VentaCodEmpresa } from "./VentaCodEmpresa";
import { VentaCodMoneda } from "./VentaCodMoneda";
import { VentaCodProDetraccion } from "./VentaCodProDetraccion";
import { VentaCodTipDocAnticipo } from "./VentaCodTipDocAnticipo";
import { VentaCodTipDocCliAnticipo } from "./VentaCodTipDocCliAnticipo";
import { VentaCodTipDocRef } from "./VentaCodTipDocRef";
import { VentaCodTipDocVenta } from "./VentaCodTipDocVenta";
import { VentaCodTipGuiaRemision } from "./VentaCodTipGuiaRemision";
import { VentaCodTipOperacion } from "./VentaCodTipOperacion";
import { VentaDetalles } from "./VentaDetalles";
import { VentaDetraccion } from "./VentaDetraccion";
import { VentaDireccion } from "./VentaDireccion";
import { VentaEmail } from "./VentaEmail";
import { VentaEnvioAutoSunat } from "./VentaEnvioAutoSunat";
import { VentaFactorDetraccion } from "./VentaFactorDetraccion";
import { VentaFecEmision } from "./VentaFecEmision";
import { VentaFecVence } from "./VentaFecVence";
import { VentaFormaPago } from "./VentaFormaPago";
import { VentaId } from "./VentaId";
import { VentaImporteAnticipo } from "./VentaImporteAnticipo";
import { VentaImporteAnticipos } from "./VentaImporteAnticipos";
import { VentaImporteCobrar } from "./VentaImporteCobrar";
import { VentaImporteDescuentos } from "./VentaImporteDescuentos";
import { VentaImporteDescuentosGlobales } from "./VentaImporteDescuentosGlobales";
import { VentaImporteDetracion } from "./VentaImporteDetracion";
import { VentaImporteICBPER } from "./VentaImporteICBPER";
import { VentaImporteIgv } from "./VentaImporteIgv";
import { VentaImporteIsc } from "./VentaImporteIsc";
import { VentaImporteOtros } from "./VentaImporteOtros";
import { VentaImportePercepcion } from "./VentaImportePercepcion";
import { VentaImporteSubTotal } from "./VentaImporteSubTotal";
import { VentaImporteTotal } from "./VentaImporteTotal";
import { VentaImporteTotalTexto } from "./VentaImporteTotalTexto";
import { VentaImporteValorVenta } from "./VentaImporteValorVenta";
import { VentaNomComercialCli } from "./VentaNomComercialCli";
import { VentaNroDocAnticipo } from "./VentaNroDocAnticipo";
import { VentaNroDocCli } from "./VentaNroDocCli";
import { VentaNroDocRef } from "./VentaNroDocRef";
import { VentaNroDocuVenta } from "./VentaNroDocuVenta";
import { VentaNroGuiaRemision } from "./VentaNroGuiaRemision";
import { VentaNroOrdenCompra } from "./VentaNroOrdenCompra";
import { VentaObservaciones } from "./VentaObservaciones";
import { VentaPhone } from "./VentaPhone";
import { VentaRazonSocial } from "./VentaRazonSocial";
import { VentaSerieDocAnticipo } from "./VentaSerieDocAnticipo";
import { VentaSerieDocuVenta } from "./VentaSerieDocuVenta";
import { VentaSimboloMoneda } from "./VentaSimboloMoneda";
import { VentaTipDocCli } from "./VentaTipDocCli";
import { VentaTipoCambio } from "./VentaTipoCambio";

export class Venta {
  id: string;
  codEmpresa: VentaCodEmpresa;
  codTipDocVenta: VentaCodTipDocVenta;
  serieDocuVenta: VentaSerieDocuVenta;
  nroDocuVenta: VentaNroDocuVenta;
  tipDocCli: VentaTipDocCli;
  nroDocCli: VentaNroDocCli; //Ruc; dni; ce
  nomComercialCli: VentaNomComercialCli;
  razonSocial: VentaRazonSocial;
  direccion: VentaDireccion;
  phone: VentaPhone;
  email: VentaEmail;
  fecEmision: VentaFecEmision;
  fecVence: VentaFecVence;
  codMoneda: VentaCodMoneda;
  simboloMoneda: VentaSimboloMoneda;
  tipoCambio: VentaTipoCambio;
  codTipOperacion: VentaCodTipOperacion;
  cancelado: VentaCancelado;
  formaPago: VentaFormaPago;
  envioAutoSunat: VentaEnvioAutoSunat;
  observaciones: VentaObservaciones;
  agentePercepcion: VentaAgentePercepcion;
  detraccion: VentaDetraccion;
  codProDetraccion: VentaCodProDetraccion;
  factorDetraccion: VentaFactorDetraccion;
  importeDetracion: VentaImporteDetracion;
  importeSubTotal: VentaImporteSubTotal;
  importeDescuentosGlobales: VentaImporteDescuentosGlobales;
  importeDescuentos: VentaImporteDescuentos;
  importeOtros: VentaImporteOtros;
  importeAnticipos: VentaImporteAnticipos;
  importeValorVenta: VentaImporteValorVenta;
  importeIsc: VentaImporteIsc;
  importeIgv: VentaImporteIgv;
  importeICBPER: VentaImporteICBPER;
  importePercepcion: VentaImportePercepcion;
  importeTotal: VentaImporteTotal;
  importeCobrar: VentaImporteCobrar;
  importeTotalTexto: VentaImporteTotalTexto;
  nroOrdenCompra: VentaNroOrdenCompra;
  codTipGuiaRemision: VentaCodTipGuiaRemision;
  nroGuiaRemision: VentaNroGuiaRemision;
  codTipDocRef: VentaCodTipDocRef;
  nroDocRef: VentaNroDocRef;
  codTipDocAnticipo: VentaCodTipDocAnticipo; //02 fv, 03 bv emitida x anticipo. catalogo12
  serieDocAnticipo: VentaSerieDocAnticipo;
  nroDocAnticipo: VentaNroDocAnticipo;
  codTipDocCliAnticipo: VentaSerieDocAnticipo; //catalogo06
  importeAnticipo: VentaImporteAnticipo;
  detalles: VentaDetalles[];

  constructor(
    codEmpresa: VentaCodEmpresa,
    codTipDocVenta: VentaCodTipDocVenta,
    serieDocuVenta: VentaSerieDocuVenta,
    nroDocuVenta: VentaNroDocuVenta,
    tipDocCli: VentaTipDocCli,
    nroDocCli: VentaNroDocCli, //Ruc, dni, ce
    nomComercialCli: VentaNomComercialCli,
    razonSocial: VentaRazonSocial,
    direccion: VentaDireccion,
    phone: VentaPhone,
    email: VentaEmail,
    fecEmision: VentaFecEmision,
    fecVence: VentaFecVence,
    codMoneda: VentaCodMoneda,
    simboloMoneda: VentaSimboloMoneda,
    tipoCambio: VentaTipoCambio,
    codTipOperacion: VentaCodTipOperacion,
    cancelado: VentaCancelado,
    formaPago: VentaFormaPago,
    envioAutoSunat: VentaEnvioAutoSunat,
    observaciones: VentaObservaciones,
    agentePercepcion: VentaAgentePercepcion,
    detraccion: VentaDetraccion,
    codProDetraccion: VentaCodProDetraccion,
    factorDetraccion: VentaFactorDetraccion,
    importeDetracion: VentaImporteDetracion,
    importeSubTotal: VentaImporteSubTotal,
    importeDescuentosGlobales: VentaImporteDescuentosGlobales,
    importeDescuentos: VentaImporteDescuentos,
    importeOtros: VentaImporteOtros,
    importeAnticipos: VentaImporteAnticipos,
    importeValorVenta: VentaImporteValorVenta,
    importeIsc: VentaImporteIsc,
    importeIgv: VentaImporteIgv,
    importeICBPER: VentaImporteICBPER,
    importePercepcion: VentaImportePercepcion,
    importeTotal: VentaImporteTotal,
    importeCobrar: VentaImporteCobrar,
    importeTotalTexto: VentaImporteTotalTexto,
    nroOrdenCompra: VentaNroOrdenCompra,
    codTipGuiaRemision: VentaCodTipGuiaRemision,
    nroGuiaRemision: VentaNroGuiaRemision,
    codTipDocRef: VentaCodTipDocRef,
    nroDocRef: VentaNroDocRef,
    codTipDocAnticipo: VentaCodTipDocAnticipo, //02 fv, 03 bv emitida x anticipo. catalogo12
    serieDocAnticipo: VentaSerieDocAnticipo,
    nroDocAnticipo: VentaNroDocAnticipo,
    codTipDocCliAnticipo: VentaCodTipDocCliAnticipo, //catalogo06
    importeAnticipo: VentaImporteAnticipo,
    detalles: VentaDetalles[] = []
  ) {
    this.id = codEmpresa.value + serieDocuVenta.value + nroDocuVenta.value;
    this.codEmpresa = codEmpresa;
    this.codTipDocVenta = codTipDocVenta;
    this.serieDocuVenta = serieDocuVenta;
    this.nroDocuVenta = nroDocuVenta;
    this.tipDocCli = tipDocCli;
    this.nroDocCli = nroDocCli;
    this.nomComercialCli = nomComercialCli;
    this.razonSocial = razonSocial;
    this.direccion = direccion;
    this.phone = phone;
    this.email = email;
    this.fecEmision = fecEmision;
    this.fecVence = fecVence;
    this.codMoneda = codMoneda;
    this.simboloMoneda = simboloMoneda;
    this.tipoCambio = tipoCambio;
    this.codTipOperacion = codTipOperacion;
    this.cancelado = cancelado;
    this.formaPago = formaPago;
    this.envioAutoSunat = envioAutoSunat;
    this.observaciones = observaciones;
    this.agentePercepcion = agentePercepcion;
    this.detraccion = detraccion;
    this.codProDetraccion = codProDetraccion;
    this.factorDetraccion = factorDetraccion;
    this.importeDetracion = importeDetracion;
    this.importeSubTotal = importeSubTotal;
    this.importeDescuentosGlobales = importeDescuentosGlobales;
    this.importeDescuentos = importeDescuentos;
    this.importeOtros = importeOtros;
    this.importeAnticipos = importeAnticipos;
    this.importeValorVenta = importeValorVenta;
    this.importeIsc = importeIsc;
    this.importeIgv = importeIgv;
    this.importeICBPER = importeICBPER;
    this.importePercepcion = importePercepcion;
    this.importeTotal = importeTotal;
    this.importeCobrar = importeCobrar;
    this.importeTotalTexto = importeTotalTexto;
    this.nroOrdenCompra = nroOrdenCompra;
    this.codTipGuiaRemision = codTipGuiaRemision;
    this.nroGuiaRemision = nroGuiaRemision;
    this.codTipDocRef = codTipDocRef;
    this.nroDocRef = nroDocRef;
    this.codTipDocAnticipo = codTipDocAnticipo;
    this.serieDocAnticipo = serieDocAnticipo;
    this.nroDocAnticipo = nroDocAnticipo;
    this.codTipDocCliAnticipo = codTipDocCliAnticipo;
    this.importeAnticipo = importeAnticipo;
    this.detalles = detalles;
  }

  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      codTipDocVenta: this.codTipDocVenta.value,
      serieDocuVenta: this.serieDocuVenta.value,
      nroDocuVenta: this.nroDocuVenta.value,
      tipDocCli: this.tipDocCli.value,
      nroDocCli: this.nroDocCli.value,
      nomComercialCli: this.nomComercialCli.value,
      razonSocial: this.razonSocial.value,
      direccion: this.direccion.value,
      phone: this.phone.value,
      email: this.email.value,
      fecEmision: this.fecEmision.value,
      fecVence: this.fecVence.value,
      codMoneda: this.codMoneda.value,
      simboloMoneda: this.simboloMoneda.value,
      tipoCambio: this.tipoCambio.value,
      codTipOperacion: this.codTipOperacion.value,
      cancelado: this.cancelado.value,
      formaPago: this.formaPago.value,
      envioAutoSunat: this.envioAutoSunat.value,
      observaciones: this.observaciones.value,
      agentePercepcion: this.agentePercepcion.value,
      detraccion: this.detraccion.value,
      codProDetraccion: this.codProDetraccion.value,
      factorDetraccion: this.factorDetraccion.value,
      importeDetracion: this.importeDetracion.value,
      importeSubTotal: this.importeSubTotal.value,
      importeDescuentosGlobales: this.importeDescuentosGlobales.value,
      importeDescuentos: this.importeDescuentos.value,
      importeOtros: this.importeOtros.value,
      importeAnticipos: this.importeAnticipos.value,
      importeValorVenta: this.importeValorVenta.value,
      importeIsc: this.importeIsc.value,
      importeIgv: this.importeIgv.value,
      importeICBPER: this.importeICBPER.value,
      importePercepcion: this.importePercepcion.value,
      importeTotal: this.importeTotal.value,
      importeCobrar: this.importeCobrar.value,
      importeTotalTexto: this.importeTotalTexto.value,
      nroOrdenCompra: this.nroOrdenCompra.value,
      codTipGuiaRemision: this.codTipGuiaRemision.value,
      nroGuiaRemision: this.nroGuiaRemision.value,
      codTipDocRef: this.codTipDocRef.value,
      nroDocRef: this.nroDocRef.value,
      codTipDocAnticipo: this.codTipDocAnticipo.value,
      serieDocAnticipo: this.serieDocAnticipo.value,
      nroDocAnticipo: this.nroDocAnticipo.value,
      codTipDocCliAnticipo: this.codTipDocCliAnticipo.value,
      importeAnticipo: this.importeAnticipo.value,
      detalles: this.detalles,
    };
  }
}
