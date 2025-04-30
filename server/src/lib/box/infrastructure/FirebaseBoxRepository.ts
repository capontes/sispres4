import { Firebase } from "../../shared/infrastructure/firebase";
import { Box } from "../domain/Box";
import { BoxMes } from "../domain/Box;Mes";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import { BoxRepository } from "../domain/BoxRepository";
import { BoxCodEmpresa } from "../domain/BoxCodEmpresa";
import { BoxAnio } from "../domain/BoxAnio";
import { BoxEstado } from "../domain/BoxEstado";
import { BoxNroMovimientos } from "../domain/BoxNroMovimientos";
import { BoxSaldoInicial } from "../domain/BoxSaldoInicial";
import { BoxCapitalPrestado } from "../domain/BoxCapitalPrestado";
import { BoxCapitalCobrado } from "../domain/BoxCapitalCobrado";
import { BoxSeguroCobrado } from "../domain/BoxSeguroCobrado";
import { BoxInteresCobrado } from "../domain/BoxInteresCobrado";
import { BoxMoraCobrado } from "../domain/BoxMoraCobrado";
import { BoxSaldoFinal } from "../domain/BoxSaldoFinal";
import { BoxUsuApertura } from "../domain/BoxUsuApertura";
import { BoxUsuCierra } from "../domain/BoxUsuCierra";
import { BoxFecApertura } from "../domain/BoxFecApertura";
import { BoxFecCierre } from "../domain/BoxfecCierre";
import { BoxCierreDiario } from "../domain/BoxCierreDiario";

type FirebaseBox = {
  codEmpresa: string;
  anio: string;
  mes: string;
  estado: string;
  nroMovimientos: number;
  saldoInicial: number;
  capitalPrestado: number;
  capitalCobrado: number;
  seguroCobrado: number;
  interesCobrado: number;
  moraCobrado: number;
  saldoFinal: number;
  usuApertura: string;
  usuCierra: string;
  fecApertura: Date;
  fecCierre: Date;
  cierreDiario: {
    dia: string;
    estadoDia: string; //A=APERTURADO, C=CERRADO
    nroMovientosDia: number;
    saldoInicialDia: number;
    capitalPrestadoDia: number;
    capitalCobradoDia: number;
    seguroCobradoDia: number;
    interesCobradoDia: number;
    moraCobradoDia: number;
    saldoFinalDia: number;
    usuAperturaDia: string;
    usuCierraDia: string;
    fecAperturaDia: Date;
    fecCierreDia: Date;
  }[];
};

export class FirebaseBoxRepository implements BoxRepository {
  db: Firestore;

  constructor() {
    this.db = new Firebase().getFirebase();
  }

  async getAll(codEmpresa: BoxCodEmpresa): Promise<Box[]> {
    const q = query(
      collection(this.db, "boxs"),
      where("conEmpresa", "==", codEmpresa.value)
    );
    const result = await getDocs(q);
    const boxs: Box[] = [];
    return result.docs.map((doc) => {
      return this.mapTpDomain(doc.data() as FirebaseBox);
    });
  }

  async getById(
    codEmpresa: BoxCodEmpresa,
    mes: BoxMes,
    anio: BoxAnio
  ): Promise<Box | null> {
    const id = codEmpresa.value + mes.value + anio.value;
    const docRef = doc(this.db, "boxs", id);
    const result = await getDoc(docRef);
    if (!result.exists()) return null;
    return this.mapTpDomain({
      ...result.data(),
    } as FirebaseBox);
  }

  async create(box: Box): Promise<void> {
    const id = box.codEmpresa.value + box.mes.value + box.anio.value;
    const docRef = doc(this.db, "boxs", id);
    await setDoc(docRef, {
      codEmpresa: box.codEmpresa.value,
      anio: box.anio.value,
      mes: box.mes.value,
      estado: box.estado.value,
      nroMovimientos: box.nroMovimientos.value,
      saldoInicial: box.saldoInicial.value,
      capitalPrestado: box.capitalPrestado.value,
      capitalCobrado: box.capitalCobrado.value,
      seguroCobrado: box.seguroCobrado.value,
      interesCobrado: box.interesCobrado.value,
      moraCobrado: box.moraCobrado.value,
      saldoFinal: box.saldoFinal.value,
      usuApertura: box.usuApertura.value,
      usuCierra: box.usuCierra.value,
      fecApertura: new Date(box.fecApertura.value),
      fecCierre: new Date(box.fecCierre.value),
      cierreDiario: box.cierreDiario.map((c) => ({
        dia: c.dia,
        estadoDia: c.estadoDia, //A=APERTURADO, C=CERRADO
        nroMovientosDia: c.nroMovientosDia,
        saldoInicialDia: c.saldoInicialDia,
        capitalPrestadoDia: c.capitalPrestadoDia,
        capitalCobradoDia: c.capitalCobradoDia,
        seguroCobradoDia: c.seguroCobradoDia || 0, // Ensure property exists or provide default
        interesCobradoDia: c.interesCobradoDia,
        moraCobradoDia: c.moraCobradoDia,
        saldoFinalDia: c.saldoFinalDia,
        usuAperturaDia: c.usuAperturaDia,
        usuCierraDia: c.usuCierraDia,
        fecAperturaDia: new Date(c.fecAperturaDia),
        fecCierreDia: new Date(c.fecCierreDia),
      })),
    });
  }

  async update(box: Box): Promise<void> {
    const id = box.codEmpresa.value + box.mes.value + box.anio.value;
    const docRef = doc(this.db, "boxs", id);
    await deleteDoc(docRef); // deleteDoc only accepts one argument
  }

  async delete(
    codEmpresa: BoxCodEmpresa,
    mes: BoxMes,
    anio: BoxAnio
  ): Promise<void> {
    const id = codEmpresa.value + mes.value + anio.value;
    const docRef = doc(this.db, "boxs", id);
    await deleteDoc(docRef);
  }

  private mapTpDomain(box: FirebaseBox): Box {
    return new Box(
      new BoxCodEmpresa(box.codEmpresa),
      new BoxAnio(box.anio),
      new BoxMes(box.mes),
      new BoxEstado(box.estado),
      new BoxNroMovimientos(box.nroMovimientos),
      new BoxSaldoInicial(box.saldoInicial),
      new BoxCapitalPrestado(box.capitalPrestado),
      new BoxCapitalCobrado(box.capitalCobrado),
      new BoxSeguroCobrado(box.seguroCobrado),
      new BoxInteresCobrado(box.interesCobrado),
      new BoxMoraCobrado(box.moraCobrado),
      new BoxSaldoFinal(box.saldoFinal),
      new BoxUsuApertura(box.usuApertura),
      new BoxUsuCierra(box.usuCierra),
      new BoxFecApertura(box.fecApertura),
      new BoxFecCierre(box.fecCierre),
      box.cierreDiario.map(
        (c) =>
          new BoxCierreDiario(
            c.dia,
            c.estadoDia, //A=APERTURADO, C=CERRADO
            c.nroMovientosDia,
            c.saldoInicialDia,
            c.capitalPrestadoDia,
            c.capitalCobradoDia,
            c.seguroCobradoDia,
            c.interesCobradoDia,
            c.moraCobradoDia,
            c.saldoFinalDia,
            c.usuAperturaDia,
            c.usuCierraDia,
            c.fecAperturaDia,
            c.fecCierreDia
          )
      )
    );
  }
}
