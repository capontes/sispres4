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
import { VentaCodMoneda } from "../domain/VentaCodMoneda";
import { VentaCodTipOperacion } from "../domain/VentaCodTipOperacion";
import { VentaFormaPago } from "../domain/VentaFormaPago";
import { VentaNroOrdenCompra } from "../domain/VentaNroOrdenCompra";
import { VentaObservaciones } from "../domain/VentaObservaciones";
import { VentaCliente } from "../domain/VentaCliente";
import { VentaDatosTransporteCarga } from "../domain/VentaDatosTransporteCarga";
import { VentaAnticipo } from "../domain/VentaAnticipo";
import { VentaTotales } from "../domain/VentaTotales";
import { VentaDetraccion } from "../domain/VentaDetraccion";
import { VentaTerminosPago } from "../domain/VentaTerminosPago";
import { VentaCuotasCredito } from "../domain/VentaCuotasCredito";
import { VentaCodTipDoc } from "../domain/VentaCodTipDoc";
import { VentaSerieDoc } from "../domain/VentaSerieDoc";
import { VentaNroDoc } from "../domain/VentaNroDoc";
import { VentaFecVencimiento } from "../domain/VentaFecVencimiento";
import { VentaHoraEmision } from "../domain/VentaHoraEmision";
import { VentaFactorTax } from "../domain/VentaFactorTax";
import { VentaEnvioAutoCli } from "../domain/VentaEnvioAutoCli";
import { VentaCodEstablecimientoEmisor } from "../domain/VentaCodEstablecimientoEmisor";
import { VentaItem } from "../domain/VentaItem";

type FirebaseVenta = {
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
    const docRef = doc(this.db, "ventas", venta.id.value);
    await setDoc(docRef, {
      codEmpresa: venta.codEmpresa.value,
      codTipDoc: venta.codTipDoc.value,
      serieDoc: venta.serieDoc.value,
      nroDoc: venta.nroDoc.value,
      CodTipOperacion: venta.CodTipOperacion.value,
      fecEmision: venta.fecEmision.value,
      fecVencimiento: venta.fecVencimiento.value,
      horaEmision: venta.horaEmision.value,
      codMoneda: venta.codMoneda.value,
      factorTax: venta.factorTax.value,
      envioAutoCli: venta.envioAutoCli.value,
      formaPAgo: venta.formaPAgo.value,
      nroOrdenCompra: venta.nroOrdenCompra.value,
      codEstablecimientoEmisor: venta.codEstablecimientoEmisor.value,
      cliente: {
        tipDoc: venta.cliente.tipDoc,
        nroDoc: venta.cliente.nroDoc,
        nomComercial: venta.cliente.nomComercial,
        razonSocial: venta.cliente.razonSocial,
        codPais: venta.cliente.codPais,
        ubigeo: venta.cliente.ubigeo,
        direccion: venta.cliente.direccion,
        email: venta.cliente.email,
        phone: venta.cliente.phone,
      },
      datosTransporteCarga: {
        ubigeoOrigen: venta.datosTransporteCarga.ubigeoOrigen,
        direccionOrigen: venta.datosTransporteCarga.direccionOrigen,
        ubigeo_destino: venta.datosTransporteCarga.ubigeo_destino,
        direccionDestino: venta.datosTransporteCarga.direccionDestino,
        valorRefServicioTransporte:
          venta.datosTransporteCarga.valorRefServicioTransporte,
        valorReferencialCargaEfectiva:
          venta.datosTransporteCarga.valorReferencialCargaEfectiva,
        valorReferencialCargaUtil:
          venta.datosTransporteCarga.valorReferencialCargaUtil,
        detalleViaje: venta.datosTransporteCarga.detalleViaje,
      },
      anticipos: venta.anticipos.map((c) => ({
        codTipoDoc: c.codTipoDoc,
        serie: c.serie,
        numero: c.numero,
        total: c.total,
      })),
      totales: {
        exportacion: venta.totales.exportacion,
        gravadas: venta.totales.gravadas,
        inafectas: venta.totales.inafectas,
        exoneradas: venta.totales.exoneradas,
        gratuitas: venta.totales.gratuitas,
        Otros: venta.totales.Otros,
        tax: venta.totales.tax,
        venta: venta.totales.venta,
        anticipos: venta.totales.anticipos,
        retencion: venta.totales.retencion,
        codRetencion: venta.totales.codRetencion,
        descuentos: venta.totales.descuentos,
      },
      detraccion: {
        codigo: venta.detraccion.codigo,
        porcentaje: venta.detraccion.porcentaje,
        monto: venta.detraccion.monto,
        codMetodoPago: venta.detraccion.codMetodoPago,
        cuentaBancaria: venta.detraccion.cuentaBancaria,
        NombreCuentaBancaria: venta.detraccion.NombreCuentaBancaria,
      },
      terminosPago: {
        descripcion: venta.terminosPago.descripcion,
        tipo: venta.terminosPago.tipo,
      },
      cuotasCredito: venta.cuotasCredito.map((c) => ({
        cuota: c.cuota,
        fechaPago: c.fechaPago,
        importe: c.importe,
      })),
      observaciones: venta.observaciones.value,
      items: venta.items.map((c) => ({
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
      })),
    });
  }

  async update(venta: Venta): Promise<void> {
    const docRef = doc(this.db, "ventas", venta.id.value);
    await updateDoc(docRef, {
      CodTipOperacion: venta.CodTipOperacion.value,
      fecEmision: venta.fecEmision.value,
      fecVencimiento: venta.fecVencimiento.value,
      horaEmision: venta.horaEmision.value,
      codMoneda: venta.codMoneda.value,
      factorTax: venta.factorTax.value,
      envioAutoCli: venta.envioAutoCli.value,
      formaPAgo: venta.formaPAgo.value,
      nroOrdenCompra: venta.nroOrdenCompra.value,
      codEstablecimientoEmisor: venta.codEstablecimientoEmisor.value,
      cliente: {
        tipDoc: venta.cliente.tipDoc,
        nroDoc: venta.cliente.nroDoc,
        nomComercial: venta.cliente.nomComercial,
        razonSocial: venta.cliente.razonSocial,
        codPais: venta.cliente.codPais,
        ubigeo: venta.cliente.ubigeo,
        direccion: venta.cliente.direccion,
        email: venta.cliente.email,
        phone: venta.cliente.phone,
      },
      datosTransporteCarga: {
        ubigeoOrigen: venta.datosTransporteCarga.ubigeoOrigen,
        direccionOrigen: venta.datosTransporteCarga.direccionOrigen,
        ubigeo_destino: venta.datosTransporteCarga.ubigeo_destino,
        direccionDestino: venta.datosTransporteCarga.direccionDestino,
        valorRefServicioTransporte:
          venta.datosTransporteCarga.valorRefServicioTransporte,
        valorReferencialCargaEfectiva:
          venta.datosTransporteCarga.valorReferencialCargaEfectiva,
        valorReferencialCargaUtil:
          venta.datosTransporteCarga.valorReferencialCargaUtil,
        detalleViaje: venta.datosTransporteCarga.detalleViaje,
      },
      anticipos: venta.anticipos.map((c) => ({
        codTipoDoc: c.codTipoDoc,
        serie: c.serie,
        numero: c.numero,
        total: c.total,
      })),
      totales: {
        exportacion: venta.totales.exportacion,
        gravadas: venta.totales.gravadas,
        inafectas: venta.totales.inafectas,
        exoneradas: venta.totales.exoneradas,
        gratuitas: venta.totales.gratuitas,
        Otros: venta.totales.Otros,
        tax: venta.totales.tax,
        venta: venta.totales.venta,
        anticipos: venta.totales.anticipos,
        retencion: venta.totales.retencion,
        codRetencion: venta.totales.codRetencion,
        descuentos: venta.totales.descuentos,
      },
      detraccion: {
        codigo: venta.detraccion.codigo,
        porcentaje: venta.detraccion.porcentaje,
        monto: venta.detraccion.monto,
        codMetodoPago: venta.detraccion.codMetodoPago,
        cuentaBancaria: venta.detraccion.cuentaBancaria,
        NombreCuentaBancaria: venta.detraccion.NombreCuentaBancaria,
      },
      terminosPago: {
        descripcion: venta.terminosPago.descripcion,
        tipo: venta.terminosPago.tipo,
      },
      cuotasCredito: venta.cuotasCredito.map((c) => ({
        cuota: c.cuota,
        fechaPago: c.fechaPago,
        importe: c.importe,
      })),
      observaciones: venta.observaciones.value,
      items: venta.items.map((c) => ({
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
      })),
    });
  }

  private mapToDomain(venta: FirebaseVenta): Venta {
    return new Venta(
      new VentaCodEmpresa(venta.codEmpresa),
      new VentaCodTipDoc(venta.codTipDoc),
      new VentaSerieDoc(venta.serieDoc),
      new VentaNroDoc(venta.nroDoc),
      new VentaCodTipOperacion(venta.CodTipOperacion),
      new VentaFecEmision(venta.fecEmision),
      new VentaFecVencimiento(venta.fecVencimiento),
      new VentaHoraEmision(venta.horaEmision),
      new VentaCodMoneda(venta.codMoneda),
      new VentaFactorTax(venta.factorTax),
      new VentaEnvioAutoCli(venta.envioAutoCli),
      new VentaFormaPago(venta.formaPAgo),
      new VentaNroOrdenCompra(venta.nroOrdenCompra),
      new VentaCodEstablecimientoEmisor(venta.codEstablecimientoEmisor),
      new VentaCliente(
        venta.cliente.tipDoc,
        venta.cliente.nroDoc,
        venta.cliente.nomComercial,
        venta.cliente.razonSocial,
        venta.cliente.codPais,
        venta.cliente.ubigeo,
        venta.cliente.direccion,
        venta.cliente.email,
        venta.cliente.phone
      ),
      new VentaDatosTransporteCarga(
        venta.datosTransporteCarga.ubigeoOrigen,
        venta.datosTransporteCarga.direccionOrigen,
        venta.datosTransporteCarga.ubigeo_destino,
        venta.datosTransporteCarga.direccionDestino,
        venta.datosTransporteCarga.valorRefServicioTransporte,
        venta.datosTransporteCarga.valorReferencialCargaEfectiva,
        venta.datosTransporteCarga.valorReferencialCargaUtil,
        venta.datosTransporteCarga.detalleViaje
      ),
      venta.anticipos.map(
        (c) => new VentaAnticipo(c.codTipoDoc, c.serie, c.numero, c.total)
      ),
      new VentaTotales(
        venta.totales.exportacion,
        venta.totales.gravadas,
        venta.totales.inafectas,
        venta.totales.exoneradas,
        venta.totales.gratuitas,
        venta.totales.Otros,
        venta.totales.tax,
        venta.totales.venta,
        venta.totales.anticipos,
        venta.totales.retencion,
        venta.totales.codRetencion,
        venta.totales.descuentos
      ),
      new VentaDetraccion(
        venta.detraccion.codigo,
        venta.detraccion.porcentaje,
        venta.detraccion.monto,
        venta.detraccion.codMetodoPago,
        venta.detraccion.cuentaBancaria,
        venta.detraccion.NombreCuentaBancaria
      ),
      new VentaTerminosPago(
        venta.terminosPago.descripcion,
        venta.terminosPago.tipo
      ),
      venta.cuotasCredito.map(
        (c) => new VentaCuotasCredito(c.cuota, c.fechaPago, c.importe)
      ),
      new VentaObservaciones(venta.observaciones),
      venta.items.map(
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
  }
}
