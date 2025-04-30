import { Box } from "../../domain/Box";
import { BoxCodEmpresa } from "../../domain/BoxCodEmpresa";
import { BoxRepository } from "../../domain/BoxRepository";

export class BoxGetAll {
  constructor(private boxRepository: BoxRepository) {}
  async run(codEmpresa: string): Promise<Box[]> {
    const boxCodEmpresa = new BoxCodEmpresa(codEmpresa);
    return await this.boxRepository.getAll(boxCodEmpresa);
  }
}
