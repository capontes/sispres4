import { BoxMes } from "./BoxMes";
import { BoxAnio } from "./BoxAnio";
import { BoxCodEmpresa } from "./BoxCodEmpresa";
import { Box } from "./Box";

export interface BoxRepository {
  getAll(codEmpresa: BoxCodEmpresa): Promise<Box[]>;
  getById(
    codEmpresa: BoxCodEmpresa,
    mes: BoxMes,
    anio: BoxAnio
  ): Promise<Box | null>;
  create(box: Box): Promise<void>;
  update(box: Box): Promise<void>;
  delete(codEmpresa: BoxCodEmpresa, mes: BoxMes, anio: BoxAnio): Promise<void>;
}
