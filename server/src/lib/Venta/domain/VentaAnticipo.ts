export class VentaAnticipo {
  codTipoDoc: string;
  serie: string;
  numero: string;
  total: number;

  constructor(
    codTipoDoc: string,
    serie: string,
    numero: string,
    total: number
  ) {
    this.codTipoDoc = codTipoDoc;
    this.serie = serie;
    this.numero = numero;
    this.total = total;
  }
}
