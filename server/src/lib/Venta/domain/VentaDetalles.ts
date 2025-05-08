export class VentaDetalles {
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
  codTipoAfectacionIgv: string; //10 Grav.15 grav + bonif; 20 exone;21 exo+grat;30 infafec;31 ina+bnofi
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

  constructor(
    item: number,
    codProducto: number,
    codProductoSunat: string,
    nombrePro: string,
    unidad: string,
    cantidad: string,
    codTipPrecio: string, //01=onerosa, 02=no onerosa(gratuito)
    precioSugerido: number, //valor unitario (sin descuentos ni impuestos)
    valorUnitario: number, //valor unitario (sin descuentos ni impuestos)
    subTotal: number,
    ChargeIndicator: boolean, //false=descuento, true=cargo
    codDescuento: string, //00=Descuentos que afectan el IGV/IVAP, 50=cargos
    factorDescuento: number,
    descuento: number,
    valorVenta: number,
    codTributo: string, //1000 IGV,   2000 ISC, 9999 otros
    nombreTributo: string,
    catImpuestos: string, //"E=Exonedado, O=Inafecto, S=IGV",
    codInterTributo: string,
    codTipoAfectacionIgv: string, //10 Grav.15 grav + bonif, 20 exone,21 exo+grat,30 infafec,31 ina+bnofi
    factorIgv: number,
    igv: number,
    indIgv: number, //condición si debe llevar o no igv
    aplicaICBPER: boolean, // si, no
    factorICBPER: string,
    importeICBPER: number,
    precio: number, //Precio Unitario
    codTipSistemaIsc: string, //01 al valor, 02 al volumen, 03 al precio de venta al publico
    factorIsc: number,
    isc: number,
    total: number
  ) {
    this.item = item;
    this.codProducto = codProducto;
    this.codProductoSunat = codProductoSunat;
    this.nombrePro = nombrePro;
    this.unidad = unidad;
    this.cantidad = cantidad;
    this.codTipPrecio = codTipPrecio; //01=onerosa; 02=no onerosa(gratuito)
    this.precioSugerido = precioSugerido; //valor unitario (sin descuentos ni impuestos)
    this.valorUnitario = valorUnitario; //valor unitario (sin descuentos ni impuestos)
    this.subTotal = subTotal;
    this.ChargeIndicator = ChargeIndicator; //false=descuento; true=cargo
    this.codDescuento = codDescuento; //00=Descuentos que afectan el IGV/IVAP; 50=cargos
    this.factorDescuento = factorDescuento;
    this.descuento = descuento;
    this.valorVenta = valorVenta;
    this.codTributo = codTributo; //1000 IGV;   2000 ISC; 9999 otros
    this.nombreTributo = nombreTributo;
    this.catImpuestos = catImpuestos; //"E=Exonedado; O=Inafecto; S=IGV";
    this.codInterTributo = codInterTributo;
    this.codTipoAfectacionIgv = codTipoAfectacionIgv; //10 Grav.15 grav + bonif; 20 exone;21 exo+grat;30 infafec;31 ina+bnofi
    this.factorIgv = factorIgv;
    this.igv = igv;
    this.indIgv = indIgv; //condición si debe llevar o no igv
    this.aplicaICBPER = aplicaICBPER; // si; no
    this.factorICBPER = factorICBPER;
    this.importeICBPER = importeICBPER;
    this.precio = precio; //Precio Unitario
    this.codTipSistemaIsc = codTipSistemaIsc; //01 al valor; 02 al volumen; 03 al precio de venta al publico
    this.factorIsc = factorIsc;
    this.isc = isc;
    this.total = total;
  }
}
