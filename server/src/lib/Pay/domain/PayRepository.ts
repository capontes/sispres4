import { Pay } from "./Pay";
import { PayCodEmpresa } from "./PayCodEmpresa";
import { PayCodPrestamo } from "./PayCodPrestamo";

export interface PayRepository {
  create(Pay: Pay): Promise<void>;
  getAll(codEmpresa: PayCodEmpresa): Promise<Pay[]>;
  getById(
    codEmpresa: PayCodEmpresa,
    CodPrestamo: PayCodPrestamo
  ): Promise<Pay | null>;
  update(Pay: Pay): Promise<void>;
  delete(codEmpresa: PayCodEmpresa, CodPrestamo: PayCodPrestamo): Promise<void>;
}
