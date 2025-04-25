import { BoxMes } from "../../domain/Box;Mes";
import { BoxAnio } from "../../domain/BoxAnio";
import { BoxCodEmpresa } from "../../domain/BoxCodEmpresa";
import { BoxRepository } from "../../domain/BoxRepository";

export class BoxDelete {
  constructor(private boxRepository: BoxRepository) {}
  async run(codEmpresa: string, anio: string, mes: string): Promise<void> {
    const boxCodEmpresa = new BoxCodEmpresa(codEmpresa);
    const boxAnio = new BoxAnio(anio);
    const boxMes = new BoxMes(mes);
    const boxExist = await this.boxRepository.getById(
      boxCodEmpresa,
      boxAnio,
      boxMes
    );
    if (!boxExist) throw new Error("Caja not Found");
    return await this.boxRepository.delete(boxCodEmpresa, boxAnio, boxMes);
  }
}
