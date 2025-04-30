import { Movement } from "../../domain/Movement";
import { MovementCodEmpresa } from "../../domain/MovementCodEmpresa";
import { MovementeTipoDoc } from "../../domain/MovementeTipoDoc";
import { MovementFecCrea } from "../../domain/MovementFecCrea";
import { MovementFecMovimiento } from "../../domain/MovementFecMovimiento";
import { MovementImporte } from "../../domain/MovementImporte";
import { MovementNroCuenta } from "../../domain/MovementNroCuenta";
import { MovementNroDoc } from "../../domain/MovementNroDoc";
import { MovementNroOperaciones } from "../../domain/MovementNroOperaciones";
import { MovementObservaciones } from "../../domain/MovementObservaciones";
import { MovementRazonSocial } from "../../domain/MovementRazon Social";
import { MovementRepository } from "../../domain/MovementRepository";
import { MovementTipoCuenta } from "../../domain/MovementTipoCuenta";
import { MovementTipoOperacion } from "../../domain/MovementTipoOperacion";
import { MovementUsuario } from "../../domain/MovementUsuario";

export class MovementUpdate {
  constructor(private movementRepository: MovementRepository) {}
  async run(
    codEmpresa: string,
    nroOperacion: number,
    nroCuenta: number,
    tipoDoc: string,
    nroDoc: string,
    razonSocial: string,
    tipoCuenta: string,
    tipoOperacion: string,
    fecMovimiento: Date,
    importe: number,
    fecCrea: Date,
    usuario: string,
    observaciones: string
  ): Promise<void> {
    const movement = new Movement(
      new MovementCodEmpresa(codEmpresa),
      new MovementNroOperaciones(nroOperacion),
      new MovementNroCuenta(nroCuenta),
      new MovementeTipoDoc(tipoDoc),
      new MovementNroDoc(nroDoc),
      new MovementRazonSocial(razonSocial),
      new MovementTipoCuenta(tipoCuenta),
      new MovementTipoOperacion(tipoOperacion),
      new MovementFecMovimiento(fecMovimiento),
      new MovementImporte(importe),
      new MovementFecCrea(fecCrea),
      new MovementUsuario(usuario),
      new MovementObservaciones(observaciones)
    );
    const id = movement.codEmpresa.value + movement.nroDoc.value;
    const movementExist = await this.movementRepository.getById(id);
    if (!movementExist) throw new Error("Movement not found");
    return await this.movementRepository.update(movement);
  }
}
