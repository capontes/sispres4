import { Firebase } from "../../shared/infrastructure/firebase";
import { Venta } from "../domain/Venta";
import { VentaCodEmpresa } from "../domain/VentaCodEmpresa";
import { VentaFecEmision } from "../domain/VentaFecEmision";
import { VentaId } from "../domain/VentaId";
import { VentaRepository } from "../domain/VentaRepository";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { VentaCancelado } from "../domain/VentaCancelado";
import { VentaCodMoneda } from "../domain/VentaCodMoneda";
import { VentaCodProDetraccion } from "../domain/VentaCodProDetraccion";
import { VentaCodTipDocAnticipo } from "../domain/VentaCodTipDocAnticipo";
import { VentaCodTipDocCliAnticipo } from "../domain/VentaCodTipDocCliAnticipo";
import { VentaCodTipDocRef } from "../domain/VentaCodTipDocRef";
import { VentaCodTipDocVenta } from "../domain/VentaCodTipDocVenta";
import { VentaCodTipGuiaRemision } from "../domain/VentaCodTipGuiaRemision";
import { VentaCodTipOperacion } from "../domain/VentaCodTipOperacion";
import { VentaDetraccion } from "../domain/VentaDetraccion";
import { VentaDireccion } from "../domain/VentaDireccion";
import { VentaEmail } from "../domain/VentaEmail";
import { VentaEnvioAutoSunat } from "../domain/VentaEnvioAutoSunat";
import { VentaFactorDetraccion } from "../domain/VentaFactorDetraccion";
import { VentaFecVence } from "../domain/VentaFecVence";
import { VentaFormaPago } from "../domain/VentaFormaPago";
import { VentaImporteAnticipo } from "../domain/VentaImporteAnticipo";
import { VentaImporteAnticipos } from "../domain/VentaImporteAnticipos";
import { VentaImporteCobrar } from "../domain/VentaImporteCobrar";
import { VentaImporteDescuentos } from "../domain/VentaImporteDescuentos";
import { VentaImporteDescuentosGlobales } from "../domain/VentaImporteDescuentosGlobales";
import { VentaImporteDetracion } from "../domain/VentaImporteDetracion";
import { VentaImporteICBPER } from "../domain/VentaImporteICBPER";
import { VentaImporteIgv } from "../domain/VentaImporteIgv";
import { VentaImporteIsc } from "../domain/VentaImporteIsc";
import { VentaImporteOtros } from "../domain/VentaImporteOtros";
import { VentaImportePercepcion } from "../domain/VentaImportePercepcion";
import { VentaImporteSubTotal } from "../domain/VentaImporteSubTotal";
import { VentaImporteTotal } from "../domain/VentaImporteTotal";
import { VentaImporteTotalTexto } from "../domain/VentaImporteTotalTexto";
import { VentaImporteValorVenta } from "../domain/VentaImporteValorVenta";
import { VentaNomComercialCli } from "../domain/VentaNomComercialCli";
import { VentaNroDocAnticipo } from "../domain/VentaNroDocAnticipo";
import { VentaNroDocCli } from "../domain/VentaNroDocCli";
import { VentaNroDocRef } from "../domain/VentaNroDocRef";
import { VentaNroDocuVenta } from "../domain/VentaNroDocuVenta";
import { VentaNroGuiaRemision } from "../domain/VentaNroGuiaRemision";
import { VentaNroOrdenCompra } from "../domain/VentaNroOrdenCompra";
import { VentaObservaciones } from "../domain/VentaObservaciones";
import { VentaPhone } from "../domain/VentaPhone";
import { VentaRazonSocial } from "../domain/VentaRazonSocial";
import { VentaSerieDocAnticipo } from "../domain/VentaSerieDocAnticipo";
import { VentaSerieDocuVenta } from "../domain/VentaSerieDocuVenta";
import { VentaSimboloMoneda } from "../domain/VentaSimboloMoneda";
import { VentaTipDocCli } from "../domain/VentaTipDocCli";
import { VentaTipoCambio } from "../domain/VentaTipoCambio";
import { VentaAgentePercepcion } from "../domain/VentaAgentePercepcion";
import { VentaDetalles } from "../domain/VentaDetalles";

type FirebaseVenta = {
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

export class FirebaseVentaRepository implements VentaRepository {
  db: Firestore;

  constructor() {
    const fb = new Firebase();
    this.db = fb.getFirebase();
  }

  async getAll(
    codEmpresa: VentaCodEmpresa,
    fecEmision: VentaFecEmision
  ): Promise<Venta[]> {
    const q = query(
      collection(this.db, "ventas"),
      where("codEmpresa", "==", codEmpresa.value),
      where("fecEmision", "==", fecEmision.value)
    );
    const result = await getDocs(q);
    const ventas: Venta[] = [];
    return result.docs.map((doc) => {
      return this.mapToDomain(doc.data() as FirebaseVenta);
    });
  }

  async getById(id: VentaId): Promise<Venta | null> {
    const docRef = doc(this.db, "ventas", id.value);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapToDomain(result.data() as FirebaseVenta);
  }

  async create(venta: Venta): Promise<void> {
    const docRef = doc(this.db, "ventas", venta.id);
    await setDoc(docRef, {
      codEmpresa: venta.codEmpresa.value,
      codTipDocVenta: venta.codTipDocVenta.value,
      serieDocuVenta: venta.serieDocuVenta.value,
      nroDocuVenta: venta.nroDocuVenta.value,
      tipDocCli: venta.tipDocCli.value,
      nroDocCli: venta.nroDocCli.value, //Ruc; dni; ce
      nomComercialCli: venta.nomComercialCli.value,
      razonSocial: venta.razonSocial.value,
      direccion: venta.direccion.value,
      phone: venta.phone.value,
      email: venta.email.value,
      fecEmision: venta.fecEmision.value,
      fecVence: venta.fecVence.value,
      codMoneda: venta.codMoneda.value,
      simboloMoneda: venta.simboloMoneda.value,
      tipoCambio: venta.tipoCambio.value,
      codTipOperacion: venta.codTipOperacion.value,
      cancelado: venta.cancelado.value,
      formaPago: venta.formaPago.value,
      envioAutoSunat: venta.envioAutoSunat.value,
      observaciones: venta.observaciones.value,
      agentePercepcion: venta.agentePercepcion.value,
      detraccion: venta.detraccion.value,
      codProDetraccion: venta.codProDetraccion.value,
      factorDetraccion: venta.factorDetraccion.value,
      importeDetracion: venta.importeDetracion.value,
      importeSubTotal: venta.importeSubTotal.value,
      importeDescuentosGlobales: venta.importeDescuentosGlobales.value,
      importeDescuentos: venta.importeDescuentos.value,
      importeOtros: venta.importeOtros.value,
      importeAnticipos: venta.importeAnticipos.value,
      importeValorVenta: venta.importeValorVenta.value,
      importeIsc: venta.importeIsc.value,
      importeIgv: venta.importeIgv.value,
      importeICBPER: venta.importeICBPER.value,
      importePercepcion: venta.importePercepcion.value,
      importeTotal: venta.importeTotal.value,
      importeCobrar: venta.importeCobrar.value,
      importeTotalTexto: venta.importeTotalTexto.value,
      nroOrdenCompra: venta.nroOrdenCompra.value,
      codTipGuiaRemision: venta.codTipGuiaRemision.value,
      nroGuiaRemision: venta.nroGuiaRemision.value,
      codTipDocRef: venta.codTipDocRef.value,
      nroDocRef: venta.nroDocRef.value,
      codTipDocAnticipo: venta.codTipDocAnticipo.value,
      serieDocAnticipo: venta.serieDocAnticipo.value,
      nroDocAnticipo: venta.nroDocAnticipo.value,
      codTipDocCliAnticipo: venta.codTipDocCliAnticipo.value, //catalogo06
      importeAnticipo: venta.importeAnticipo.value,
      detalles: venta.detalles.map((c) => ({
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
      })),
    });
  }

  async update(venta: Venta): Promise<void> {
    const docRef = doc(this.db, "ventas", venta.id);
    await updateDoc(docRef, {
      // codEmpresa: venta.codEmpresa.value,
      // codTipDocVenta: venta.codTipDocVenta.value,
      // serieDocuVenta: venta.serieDocuVenta.value,
      // nroDocuVenta: venta.nroDocuVenta.value,
      tipDocCli: venta.tipDocCli.value,
      nroDocCli: venta.nroDocCli.value, //Ruc; dni; ce
      nomComercialCli: venta.nomComercialCli.value,
      razonSocial: venta.razonSocial.value,
      direccion: venta.direccion.value,
      phone: venta.phone.value,
      email: venta.email.value,
      fecEmision: venta.fecEmision.value,
      fecVence: venta.fecVence.value,
      codMoneda: venta.codMoneda.value,
      simboloMoneda: venta.simboloMoneda.value,
      tipoCambio: venta.tipoCambio.value,
      codTipOperacion: venta.codTipOperacion.value,
      cancelado: venta.cancelado.value,
      formaPago: venta.formaPago.value,
      envioAutoSunat: venta.envioAutoSunat.value,
      observaciones: venta.observaciones.value,
      agentePercepcion: venta.agentePercepcion.value,
      detraccion: venta.detraccion.value,
      codProDetraccion: venta.codProDetraccion.value,
      factorDetraccion: venta.factorDetraccion.value,
      importeDetracion: venta.importeDetracion.value,
      importeSubTotal: venta.importeSubTotal.value,
      importeDescuentosGlobales: venta.importeDescuentosGlobales.value,
      importeDescuentos: venta.importeDescuentos.value,
      importeOtros: venta.importeOtros.value,
      importeAnticipos: venta.importeAnticipos.value,
      importeValorVenta: venta.importeValorVenta.value,
      importeIsc: venta.importeIsc.value,
      importeIgv: venta.importeIgv.value,
      importeICBPER: venta.importeICBPER.value,
      importePercepcion: venta.importePercepcion.value,
      importeTotal: venta.importeTotal.value,
      importeCobrar: venta.importeCobrar.value,
      importeTotalTexto: venta.importeTotalTexto.value,
      nroOrdenCompra: venta.nroOrdenCompra.value,
      codTipGuiaRemision: venta.codTipGuiaRemision.value,
      nroGuiaRemision: venta.nroGuiaRemision.value,
      codTipDocRef: venta.codTipDocRef.value,
      nroDocRef: venta.nroDocRef.value,
      codTipDocAnticipo: venta.codTipDocAnticipo.value,
      serieDocAnticipo: venta.serieDocAnticipo.value,
      nroDocAnticipo: venta.nroDocAnticipo.value,
      codTipDocCliAnticipo: venta.codTipDocCliAnticipo.value, //catalogo06
      importeAnticipo: venta.importeAnticipo.value,
      detalles: venta.detalles.map((c) => ({
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
      })),
    });
  }

  private mapToDomain(venta: FirebaseVenta): Venta {
    return new Venta(
      new VentaCodEmpresa(venta.codEmpresa),
      new VentaCodTipDocVenta(venta.codTipDocVenta),
      new VentaSerieDocuVenta(venta.serieDocuVenta),
      new VentaNroDocuVenta(venta.nroDocuVenta),
      new VentaTipDocCli(venta.tipDocCli),
      new VentaNroDocCli(venta.nroDocCli), //Ruc; dni; ce
      new VentaNomComercialCli(venta.nomComercialCli),
      new VentaRazonSocial(venta.razonSocial),
      new VentaDireccion(venta.direccion),
      new VentaPhone(venta.phone),
      new VentaEmail(venta.email),
      new VentaFecEmision(venta.fecEmision),
      new VentaFecVence(venta.fecVence),
      new VentaCodMoneda(venta.codMoneda),
      new VentaSimboloMoneda(venta.simboloMoneda),
      new VentaTipoCambio(venta.tipoCambio),
      new VentaCodTipOperacion(venta.codTipOperacion),
      new VentaCancelado(venta.cancelado),
      new VentaFormaPago(venta.formaPago),
      new VentaEnvioAutoSunat(venta.envioAutoSunat),
      new VentaObservaciones(venta.observaciones),
      new VentaAgentePercepcion(venta.agentePercepcion),
      new VentaDetraccion(venta.detraccion),
      new VentaCodProDetraccion(venta.codProDetraccion),
      new VentaFactorDetraccion(venta.factorDetraccion),
      new VentaImporteDetracion(venta.importeDetracion),
      new VentaImporteSubTotal(venta.importeSubTotal),
      new VentaImporteDescuentosGlobales(venta.importeDescuentosGlobales),
      new VentaImporteDescuentos(venta.importeDescuentos),
      new VentaImporteOtros(venta.importeOtros),
      new VentaImporteAnticipos(venta.importeAnticipos),
      new VentaImporteValorVenta(venta.importeValorVenta),
      new VentaImporteIsc(venta.importeIsc),
      new VentaImporteIgv(venta.importeIgv),
      new VentaImporteICBPER(venta.importeICBPER),
      new VentaImportePercepcion(venta.importePercepcion),
      new VentaImporteTotal(venta.importeTotal),
      new VentaImporteCobrar(venta.importeCobrar),
      new VentaImporteTotalTexto(venta.importeTotalTexto),
      new VentaNroOrdenCompra(venta.nroOrdenCompra),
      new VentaCodTipGuiaRemision(venta.codTipGuiaRemision),
      new VentaNroGuiaRemision(venta.nroGuiaRemision),
      new VentaCodTipDocRef(venta.codTipDocRef),
      new VentaNroDocRef(venta.nroDocRef),
      new VentaCodTipDocAnticipo(venta.codTipDocAnticipo), //02 fv, 03 bv emitida x anticipo. catalogo12
      new VentaSerieDocAnticipo(venta.serieDocAnticipo),
      new VentaNroDocAnticipo(venta.nroDocAnticipo),
      new VentaCodTipDocCliAnticipo(venta.codTipDocCliAnticipo), //catalogo06
      new VentaImporteAnticipo(venta.importeAnticipo),
      venta.detalles.map(
        (c) =>
          new VentaDetalles(
            c.item,
            c.codProducto,
            c.codProductoSunat,
            c.nombrePro,
            c.unidad,
            c.cantidad,
            c.codTipPrecio,
            c.precioSugerido,
            c.valorUnitario,
            c.subTotal,
            c.ChargeIndicator,
            c.codDescuento,
            c.factorDescuento,
            c.descuento,
            c.valorVenta,
            c.codTributo,
            c.nombreTributo,
            c.catImpuestos,
            c.codInterTributo,
            c.codTipoAfectacionIgv,
            c.factorIgv,
            c.igv,
            c.indIgv,
            c.aplicaICBPER,
            c.factorICBPER,
            c.importeICBPER,
            c.precio,
            c.codTipSistemaIsc,
            c.factorIsc,
            c.isc,
            c.total
          )
      )
    );
  }
}
