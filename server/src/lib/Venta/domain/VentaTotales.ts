export class VentaTotales {
  exportacion: number;
  gravadas: number;
  inafectas: number;
  exoneradas: number;
  gratuitas: number;
  Otros: number;
  tax: number;
  venta: number;
  anticipos: number; //0
  retencion: number; //:3.54,
  codRetencion: number; //"01"
  descuentos: {
    codigo: string; // 02,
    descripcion: string; // Descuento global,
    porcentaje: number; // 0.10,
    monto: number; // 10.00,
    base: number; // 100.00
  };

  constructor(
    exportacion: number,
    gravadas: number,
    inafectas: number,
    exoneradas: number,
    gratuitas: number,
    Otros: number,
    tax: number,
    venta: number,
    anticipos: number,
    retencion: number,
    codRetencion: number,
    descuentos: {
      codigo: string;
      descripcion: string;
      porcentaje: number;
      monto: number;
      base: number;
    }
  ) {
    this.exportacion = exportacion;
    this.gravadas = gravadas;
    this.inafectas = inafectas;
    this.exoneradas = exoneradas;
    this.gratuitas = gratuitas;
    this.Otros = Otros;
    this.tax = tax;
    this.venta = venta;
    this.anticipos = anticipos; //0
    this.retencion = retencion; //:3.54,
    this.codRetencion = codRetencion; //"01"
    this.descuentos = descuentos;
  }
}
