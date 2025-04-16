import { CustomerCodEmpresa } from "./CustomerCodEmpresa";
import { CustomerDireccion } from "./CustomerDireccion";
import { CustomerEmail } from "./CustomerEmail";
import { CustomerEstado } from "./CustomerEstado";
import { CustomerEvaluacion } from "./CustomerEvaluacion";
import { CustomerGarante } from "./CustomerGarante";
import { CustomerGarantia } from "./CustomerGarantia";
import { CustomerNomComercialCli } from "./CustomerNomComercialCli";
import { CustomerNroDoc } from "./CustomerNroDoc";
import { CustomerObservaciones } from "./CustomerObservaciones";
import { CustomerPhone } from "./CustomerPhone";
import { CustomerRazonSocial } from "./CustomerRazonSocial";
import { CustomerTasaInteres } from "./CustomerTasaInteres";
import { CustomerTasaMora } from "./CustomerTasaMora";
import { CustomerTipoDoc } from "./CustomerTipoDoc";
import { CustomerUsuario } from "./CustomerUsuario";

export class Customer {
  codEmpresa: CustomerCodEmpresa;
  tipoDoc: CustomerTipoDoc;
  nroDoc: CustomerNroDoc;
  nomComercialCli: CustomerNomComercialCli;
  razonSocial: CustomerRazonSocial;
  direccion: CustomerDireccion;
  phone: CustomerPhone;
  email: CustomerEmail;
  garante: CustomerGarante;
  evaluacion: CustomerEvaluacion;
  tasaInteres: CustomerTasaInteres;
  tasaMora: CustomerTasaMora;
  estado: CustomerEstado;
  garantia: CustomerGarantia;
  usuario: CustomerUsuario;
  observaciones: CustomerObservaciones;

  constructor(
    codEmpresa: CustomerCodEmpresa,
    tipoDoc: CustomerTipoDoc,
    nroDoc: CustomerNroDoc,
    nomComercialCli: CustomerNomComercialCli,
    razonSocial: CustomerRazonSocial,
    direccion: CustomerDireccion,
    phone: CustomerPhone,
    email: CustomerEmail,
    garante: CustomerGarante,
    evaluacion: CustomerEvaluacion,
    tasaInteres: CustomerTasaInteres,
    tasaMora: CustomerTasaMora,
    estado: CustomerEstado,
    garantia: CustomerGarantia,
    usuario: CustomerUsuario,
    observaciones: CustomerObservaciones
  ) {
    this.codEmpresa = codEmpresa;
    this.tipoDoc = tipoDoc;
    this.nroDoc = nroDoc;
    this.nomComercialCli = nomComercialCli;
    this.razonSocial = razonSocial;
    this.direccion = direccion;
    this.phone = phone;
    this.email = email;
    this.garante = garante;
    this.evaluacion = evaluacion;
    this.tasaInteres = tasaInteres;
    this.tasaMora = tasaMora;
    this.estado = estado;
    this.garantia = garantia;
    this.usuario = usuario;
    this.observaciones = observaciones;
  }
  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      tipoDoc: this.tipoDoc.value,
      nroDoc: this.nroDoc.value,
      nomComercialCli: this.nomComercialCli.value,
      razonSocial: this.razonSocial.value,
      direccion: this.direccion.value,
      phone: this.phone.value,
      email: this.email.value,
      garante: this.garante.value,
      evaluacion: this.evaluacion.value,
      tasaInteres: this.tasaInteres.value,
      tasaMora: this.tasaMora.value,
      estado: this.estado.value,
      garantia: this.garantia.value,
      usuario: this.usuario.value,
      observaciones: this.observaciones.value,
    };
  }
}
