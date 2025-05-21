export class VentaCuotasCredito {
  cuota: string;
  fechaPago: string;
  importe: number;

  constructor(cuota: string, fechaPago: string, importe: number) {
    this.cuota = cuota;
    this.fechaPago = fechaPago;
    this.importe = importe;
  }
}
