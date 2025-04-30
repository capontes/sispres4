import axios from "axios";
import { IPayRepository } from "../domain/IPayRepository";
import { Pay } from "../domain/Pay";

export class AxiosPayRepository implements IPayRepository {
  async getAll(codEmpresa: string, codPrestamo: number) {
    const pays = axios
      .get<Pay[]>(
        "http://localhost:3000/pays/" + codEmpresa + "/" + codPrestamo
      )
      .then((response) => response.data);
    if (!pays) return [];
    return pays;
  }

  async getById(codEmpresa: string, codPrestamo: number, codPago: number) {
    const pay = axios
      .get<Pay>(
        "http://localhost:3000/pays/" +
          codEmpresa +
          "/" +
          codPrestamo +
          "/" +
          codPago
      )
      .then((response) => response.data);
    if (!pay) return null;
    return pay;
  }

  async save(pay: Pay) {
    try {
      axios.post("http://localhost:3000/pays/", {
        body: JSON.stringify(pay),
      });
    } catch (error) {
      alert(error);
    }
  }

  async update(pay: Pay) {
    try {
      const payNew = axios
        .put("http://localhost:3000/pays/", {
          body: JSON.stringify(pay),
        })
        .then((response) => response.data);
      return payNew;
    } catch (error) {
      alert(error);
    }
  }

  async delete(codEmpresa: string, codPrestamo: number, codPago: number) {
    axios.delete(
      "http://localhost:3000/pays/" +
        codEmpresa +
        "/" +
        codPrestamo +
        "/" +
        codPago
    );
  }
}
