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
  RazónSocial: CustomerRazonSocial;
  dirección: CustomerDireccion;
  phone: CustomerPhone;
  Email: CustomerEmail;
  garante: CustomerGarante;
  evaluación: CustomerEvaluacion;
  tasaInteres: CustomerTasaInteres;
  tasaMora: CustomerTasaMora;
  estado: CustomerEstado;
  garantía: CustomerGarantia;
  usuario: CustomerUsuario;
  observaciones: CustomerObservaciones;

  constructor(
    codEmpresa: CustomerCodEmpresa,
    tipoDoc: CustomerTipoDoc,
    nroDoc: CustomerNroDoc,
    nomComercialCli: CustomerNomComercialCli,
    RazónSocial: CustomerRazonSocial,
    dirección: CustomerDireccion,
    phone: CustomerPhone,
    Email: CustomerEmail,
    garante: CustomerGarante,
    evaluación: CustomerEvaluacion,
    tasaInteres: CustomerTasaInteres,
    tasaMora: CustomerTasaMora,
    estado: CustomerEstado,
    garantía: CustomerGarantia,
    usuario: CustomerUsuario,
    observaciones: CustomerObservaciones
  ) {
    this.codEmpresa = codEmpresa;
    this.tipoDoc = tipoDoc;
    this.nroDoc = nroDoc;
    this.nomComercialCli = nomComercialCli;
    this.RazónSocial = RazónSocial;
    this.dirección = dirección;
    this.phone = phone;
    this.Email = Email;
    this.garante = garante;
    this.evaluación = evaluación;
    this.tasaInteres = tasaInteres;
    this.tasaMora = tasaMora;
    this.estado = estado;
    this.garantía = garantía;
    this.usuario = usuario;
    this.observaciones = observaciones;
  }
  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa.value,
      tipoDoc: this.tipoDoc.value,
      nroDoc: this.nroDoc.value,
      nomComercialCli: this.nomComercialCli.value,
      RazónSocial: this.RazónSocial.value,
      dirección: this.dirección.value,
      teléfono: this.phone.value,
      Email: this.Email.value,
      garante: this.garante.value,
      evaluación: this.evaluación.value,
      tasaInteres: this.tasaInteres.value,
      tasaMora: this.tasaMora.value,
      estado: this.estado.value,
      garantía: this.garantía.value,
      usuario: this.usuario.value,
      observaciones: this.observaciones.value,
    };
  }
}
