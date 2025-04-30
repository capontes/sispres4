export interface Pay {
  codEmpresa: string;
  codPrestamo: number;
  nroCuota: number;
  codPago: number; //correlativo
  nroCuotas: number;
  nroDoc: string;
  razonSocial: string;
  garante: string;
  monto: number;
  fecVencimiento: Date;
  fecPago: Date;
  diasRetraso: number;
  capital: number;
  seguro: number;
  interes: number;
  tasaMora: number;
  mora: number;
  totalPagar: number;
  importe: number;
  saldoCapital: number;
  tipoPago: string;
  observaciones: string;
  usuario: string;
  fecCrea: Date;
}
