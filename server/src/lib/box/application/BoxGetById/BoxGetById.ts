import { Box } from "../../domain/Box";
import { BoxMes } from "../../domain/Box;Mes";
import { BoxAnio } from "../../domain/BoxAnio";
import { BoxCodEmpresa } from "../../domain/BoxCodEmpresa";
import { BoxRepository } from "../../domain/BoxRepository";

export class BoxGetById {
  constructor(private boxRepository: BoxRepository) {}
  async run(
    codEmpresa: string,
    anio: string,
    mes: string
  ): Promise<Box | null> {
    const boxCodEmpresa = new BoxCodEmpresa(codEmpresa);
    const boxAnio = new BoxAnio(anio);
    const boxMes = new BoxMes(mes);
    const box = await this.boxRepository.getById(
      boxCodEmpresa,
      boxAnio,
      boxMes
    );
    if (!box) throw new Error("Caje not found");
    return box;
  }
}
