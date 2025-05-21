export class VentaDetraccion {
  codigo: string;
  porcentaje: number;
  monto: number;
  codMetodoPago: string;
  cuentaBancaria: string;
  NombreCuentaBancaria: string;

  constructor(
    codigo: string,
    porcentaje: number,
    monto: number,
    codMetodoPago: string,
    cuentaBancaria: string,
    NombreCuentaBancaria: string
  ) {
    this.codigo = codigo;
    this.porcentaje = porcentaje;
    this.monto = monto;
    this.codMetodoPago = codMetodoPago;
    this.cuentaBancaria = cuentaBancaria;
    this.NombreCuentaBancaria = NombreCuentaBancaria;
  }
}
