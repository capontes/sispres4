import { MovementCodEmpresa } from "./MovementCodEmpresa";
import { MovementeTipoDoc } from "./MovementeTipoDoc";
import { MovementFecCrea } from "./MovementFecCrea";
import { MovementFecMovimiento } from "./MovementFecMovimiento";
import { MovementImporte } from "./MovementImporte";
import { MovementNroCuenta } from "./MovementNroCuenta";
import { MovementNroDoc } from "./MovementNroDoc";
import { MovementNroOperaciones } from "./MovementNroOperaciones";
import { MovementObservaciones } from "./MovementObservaciones";
import { MovementRazonSocial } from "./MovementRazon Social";
import { MovementTipoCuenta } from "./MovementTipoCuenta";
import { MovementTipoOperacion } from "./MovementTipoOperacion";
import { MovementUsuario } from "./MovementUsuario";

export class Movement {
  codEmpresa: MovementCodEmpresa;
  nroOperacion: MovementNroOperaciones;
  nroCuenta: MovementNroCuenta;
  tipoDoc: MovementeTipoDoc;
  nroDoc: MovementNroDoc;
  razonSocial: MovementRazonSocial;
  tipoCuenta: MovementTipoCuenta;
  tipoOperacion: MovementTipoOperacion;
  fecMovimiento: MovementFecMovimiento;
  importe: MovementImporte;
  fecCrea: MovementFecCrea;
  usuario: MovementUsuario;
  observaciones: MovementObservaciones;

  constructor(
    codEmpresa: MovementCodEmpresa,
    nroOperacion: MovementNroOperaciones,
    nroCuenta: MovementNroCuenta,
    tipoDoc: MovementeTipoDoc,
    nroDoc: MovementNroDoc,
    razonSocial: MovementRazonSocial,
    tipoCuenta: MovementTipoCuenta,
    tipoOperacion: MovementTipoOperacion,
    fecMovimiento: MovementFecMovimiento,
    importe: MovementImporte,
    fecCrea: MovementFecCrea,
    usuario: MovementUsuario,
    observaciones: MovementObservaciones
  ) {
    this.codEmpresa = codEmpresa;
    this.nroOperacion = nroOperacion;
    this.nroCuenta = nroCuenta;
    this.tipoDoc = tipoDoc;
    this.nroDoc = nroDoc;
    this.razonSocial = razonSocial;
    this.tipoCuenta = tipoCuenta;
    this.tipoOperacion = tipoOperacion;
    this.fecMovimiento = fecMovimiento;
    this.importe = importe;
    this.fecCrea = fecCrea;
    this.usuario = usuario;
    this.observaciones = observaciones;
  }
  public mapToPrimitives() {
    return {
      codEmpresa: this.codEmpresa,
      nroOperacion: this.nroOperacion,
      nroCuenta: this.nroCuenta,
      tipoDoc: this.tipoDoc,
      nroDoc: this.nroDoc,
      razonSocial: this.razonSocial,
      tipoCuenta: this.tipoCuenta,
      tipoOperacion: this.tipoOperacion,
      fecMovimiento: this.fecMovimiento,
      importe: this.importe,
      fecCrea: this.fecCrea,
      usuario: this.usuario,
      observaciones: this.observaciones,
    };
  }
}
