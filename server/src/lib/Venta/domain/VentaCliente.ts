export class VentaCliente {
  tipDoc: string;
  nroDoc: string; //Ruc, dni, ce
  nomComercial: string;
  razonSocial: string;
  codPais: string;
  ubigeo: string;
  direccion: string;
  phone: string;
  email: string;

  constructor(
    tipDoc: string,
    nroDoc: string, //Ruc, dni, ce
    nomComercial: string,
    razonSocial: string,
    codPais: string,
    ubigeo: string,
    direccion: string,
    email: string,
    phone: string
  ) {
    this.tipDoc = tipDoc;
    this.nroDoc = nroDoc;
    this.nomComercial = nomComercial;
    this.razonSocial = razonSocial;
    this.codPais = codPais;
    this.ubigeo = ubigeo;
    this.direccion = direccion;
    this.email = email;
    this.phone = phone;
    this.ensureValidateTipDoc();
  }
  ensureValidateTipDoc() {
    if (this.tipDoc.length != 3)
      throw new Error("Tipo de Doc. del cliente debe ser de 3 caracteres");
  }
}
