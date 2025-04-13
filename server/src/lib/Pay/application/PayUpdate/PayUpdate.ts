import { Pay } from "../../domain/Pay";
import { PayCapital } from "../../domain/PayCapital";
import { PayCodEmpresa } from "../../domain/PayCodEmpresa";
import { PayCodPrestamo } from "../../domain/PayCodPrestamo";
import { PayDiasRetraso } from "../../domain/PayDiasRetraso";
import { PayFecPago } from "../../domain/PayFecPago";
import { PayFecVencimiento } from "../../domain/PayFecVencimiento";
import { PayGarante } from "../../domain/PayGarante";
import { PayImporte } from "../../domain/PayImporte";
import { PayInteres } from "../../domain/PayInteres";
import { PayMonto } from "../../domain/PayMonto";
import { PayMora } from "../../domain/PayMora";
import { PayNroCuota } from "../../domain/PayNroCuota";
import { PayNroCuotas } from "../../domain/PayNroCuotas";
import { PayNroDoc } from "../../domain/PayNroDoc";
import { PayObservaciones } from "../../domain/PayObservaciones";
import { PayRazonSocial } from "../../domain/PayRazonSocial";
import { PaySaldoCapital } from "../../domain/PaySaldoCapital";
import { PaySeguro } from "../../domain/PaySeguro";
import { PayTasaMora } from "../../domain/PayTasaMora";
import { PayTipoPago } from "../../domain/PayTipoPago";
import { PayTotalPagar } from "../../domain/PayTotalPagar";
import { PayUsuario } from "../../domain/PayUsuario";
import { PayFecCrea } from "../../domain/PayFecCrea";
import { PayRepository } from "../../domain/PayRepository";

export class PayUpdate {
  constructor(private payRepository: PayRepository) {}
  async run(
    codEmpresa: string,
    codPrestamo: number,
    nroCuota: number,
    nroCuotas: number,
    nroDoc: string,
    razonSocial: string,
    garante: string,
    monto: number,
    fecVencimiento: Date,
    fecPago: Date,
    diasRetraso: number,
    capital: number,
    seguro: number,
    interes: number,
    tasaMora: number,
    mora: number,
    totalPagar: number,
    importe: number,
    saldoCapital: number,
    tipoPago: string,
    observaciones: string,
    usuario: string,
    fecCrea: Date
  ): Promise<void> {
    const pay = new Pay(
      new PayCodEmpresa(codEmpresa),
      new PayCodPrestamo(Number(codPrestamo)),
      new PayNroCuota(nroCuota),
      new PayNroCuotas(nroCuotas),
      new PayNroDoc(nroDoc),
      new PayRazonSocial(razonSocial),
      new PayGarante(garante),
      new PayMonto(monto),
      new PayFecVencimiento(fecVencimiento),
      new PayFecPago(fecPago),
      new PayDiasRetraso(diasRetraso),
      new PayCapital(capital),
      new PaySeguro(seguro),
      new PayInteres(interes),
      new PayTasaMora(tasaMora),
      new PayMora(mora),
      new PayTotalPagar(totalPagar),
      new PayImporte(importe),
      new PaySaldoCapital(saldoCapital),
      new PayTipoPago(tipoPago),
      new PayObservaciones(observaciones),
      new PayUsuario(usuario),
      new PayFecCrea(new Date()) // Assuming fecCrea is the current date
    );
    const payCodEmpresa = new PayCodEmpresa(codEmpresa);
    const payCodPrestamo = new PayCodPrestamo(Number(codPrestamo));
    const id = payCodEmpresa.value + payCodPrestamo.value;
    const payExist = await this.payRepository.getById(id);
    if (!payExist) throw new Error("Pay not found");

    return await this.payRepository.update(pay);
  }
}
