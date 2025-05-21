export class VentaDatosTransporteCarga {
  ubigeoOrigen: string; //150101,
  direccionOrigen: string; //av. 11111,
  ubigeo_destino: string; //150102,
  direccionDestino: string; //av. 2222,
  valorRefServicioTransporte: string; //1,
  valorReferencialCargaEfectiva: string; //1,
  valorReferencialCargaUtil: string; //1,
  detalleViaje: string; //dato referencial

  constructor(
    ubigeoOrigen: string,
    direccionOrigen: string,
    ubigeo_destino: string,
    direccionDestino: string,
    valorRefServicioTransporte: string,
    valorReferencialCargaEfectiva: string,
    valorReferencialCargaUtil: string,
    detalleViaje: string
  ) {
    this.ubigeoOrigen = ubigeoOrigen;
    this.direccionOrigen = direccionOrigen;
    this.ubigeo_destino = ubigeo_destino;
    this.direccionDestino = direccionDestino;
    this.valorRefServicioTransporte = valorRefServicioTransporte;
    this.valorReferencialCargaEfectiva = valorReferencialCargaEfectiva;
    this.valorReferencialCargaUtil = valorReferencialCargaUtil;
    this.detalleViaje = detalleViaje;
  }
}
