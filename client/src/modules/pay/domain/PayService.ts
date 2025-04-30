import { IPayRepository } from "./IPayRepository";
import { Pay } from "./Pay";

export class PayService implements IPayRepository {
  constructor(private payRepository: IPayRepository) {}
  async getAll(codEmpresa: string, codPrestamo: number) {
    return this.payRepository.getAll(codEmpresa, codPrestamo);
  }
  async getById(codEmpresa: string, codPrestamo: number, codPago: number) {
    return this.payRepository.getById(codEmpresa, codPrestamo, codPago);
  }
  async save(pay: Pay) {
    return this.payRepository.save(pay);
  }
  async delete(codEmpresa: string, codPrestamo: number, codPago: number) {
    return this.payRepository.delete(codEmpresa, codPrestamo, codPago);
  }
  async update(pay: Pay) {
    return this.payRepository.update(pay);
  }
}
