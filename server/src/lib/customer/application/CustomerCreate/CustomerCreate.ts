import { Customer } from "../../domain/Customer";
import { CustomerCodEmpresa } from "../../domain/CustomerCodEmpresa";
import { CustomerDireccion } from "../../domain/CustomerDireccion";
import { CustomerEmail } from "../../domain/CustomerEmail";
import { CustomerEstado } from "../../domain/CustomerEstado";
import { CustomerEvaluacion } from "../../domain/CustomerEvaluacion";
import { CustomerGarante } from "../../domain/CustomerGarante";
import { CustomerGarantia } from "../../domain/CustomerGarantia";
import { CustomerNomComercialCli } from "../../domain/CustomerNomComercialCli";
import { CustomerNroDoc } from "../../domain/CustomerNroDoc";
import { CustomerObservaciones } from "../../domain/CustomerObservaciones";
import { CustomerPhone } from "../../domain/CustomerPhone";
import { CustomerRazonSocial } from "../../domain/CustomerRazonSocial";
import { CustomerRepository } from "../../domain/CustomerRepository";
import { CustomerTasaInteres } from "../../domain/CustomerTasaInteres";
import { CustomerTasaMora } from "../../domain/CustomerTasaMora";
import { CustomerTipoDoc } from "../../domain/CustomerTipoDoc";
import { CustomerUsuario } from "../../domain/CustomerUsuario";

export class CustomerCreate {
  constructor(private customerRepository: CustomerRepository) {}
  async run(
    codEmpresa: string,
    tipoDoc: string,
    nroDoc: string,
    nomComercialCli: string,
    razonSocial: string,
    direccion: string,
    phone: string,
    email: string,
    garante: string,
    evaluacion: string,
    tasaInteres: number,
    tasaMora: number,
    estado: string,
    garantia: string,
    usuario: string,
    observaciones: string
  ): Promise<void> {
    const customer = new Customer(
      new CustomerCodEmpresa(codEmpresa),
      new CustomerTipoDoc(tipoDoc),
      new CustomerNroDoc(nroDoc),
      new CustomerNomComercialCli(nomComercialCli),
      new CustomerRazonSocial(razonSocial),
      new CustomerDireccion(direccion),
      new CustomerPhone(phone),
      new CustomerEmail(email),
      new CustomerGarante(garante),
      new CustomerEvaluacion(evaluacion),
      new CustomerTasaInteres(tasaInteres),
      new CustomerTasaMora(tasaMora),
      new CustomerEstado(estado),
      new CustomerGarantia(garantia),
      new CustomerUsuario(usuario),
      new CustomerObservaciones(observaciones)
    );
    await this.customerRepository.create(customer);
  }
}
