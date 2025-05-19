export class VentaItem {
  item: number;
  unidad: string; // NIU;
  codigo: string;
  descripcion: string; // MacbookPro;
  codigoProductoSunat: string;
  codigoProductoGsl: string;
  cantidad: string;
  valorUnitario: string; // 100; //Sin IGV. Ejemplo
  precioUnitario: string; //118; //Con IGV. Ejemplo
  tipoTax: string; //10;
  totalBaseTax: string; //100.00;
  totalTax: string; //18;
  total: string; //118

  constructor(
    item: number,
    unidad: string,
    codigo: string,
    descripcion: string,
    codigoProductoSunat: string,
    codigoProductoGsl: string,
    cantidad: string,
    valorUnitario: string,
    precioUnitario: string,
    tipoTax: string,
    totalBaseTax: string,
    totalTax: string,
    total: string
  ) {
    this.item = item;
    this.unidad = unidad; // NIU,
    this.codigo = codigo;
    this.descripcion = descripcion; // MacbookPro,
    this.codigoProductoSunat = codigoProductoSunat;
    this.codigoProductoGsl = codigoProductoGsl;
    this.cantidad = cantidad;
    this.valorUnitario = valorUnitario; // 100, //Sin IGV. Ejemplo
    this.precioUnitario = precioUnitario; //118, //Con IGV. Ejemplo
    this.tipoTax = tipoTax; //10,
    this.totalBaseTax = totalBaseTax; //100.00,
    this.totalTax = totalTax; //18,
    this.total = total; //118
  }
}
