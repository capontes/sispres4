import { Pay } from "./Pay";
import { PayCodEmpresa } from "./PayCodEmpresa";
import { PayCodPrestamo } from "./PayCodPrestamo";

export interface PayRepository {
  create(Pay: Pay): Promise<void>;
  getAll(
    codEmpresa: PayCodEmpresa,
    codPrestamo: PayCodPrestamo
  ): Promise<Pay[]>;
  getById(id: string): Promise<Pay | null>;
  update(Pay: Pay): Promise<void>;
  delete(id: string): Promise<void>;
}
