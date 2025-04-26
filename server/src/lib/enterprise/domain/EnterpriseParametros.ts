export class EnterpriseParametros {
  codParam: string;
  desParam: string;
  tipo: string;
  valParam: string;
  constructor(
    codParam: string,
    desParam: string,
    tipo: string,
    valParam: string
  ) {
    this.codParam = codParam;
    this.desParam = desParam;
    this.tipo = tipo;
    this.valParam = valParam;
  }
}
