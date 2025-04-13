// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FirebaseConfig } from "./env";

//Cuenta de servicio de Firebase
// https://console.firebase.google.com/project/charapasrally/settings/serviceaccounts/adminsdk

export class Firebase {
  // firebaseConfig: FirebaseApp;
  firebaseConfig: any;
  constructor() {
    this.firebaseConfig = initializeApp(FirebaseConfig);
  }

  // const fb = initializeApp(firebaseConfig);
  public getFirebase() {
    return getFirestore(this.firebaseConfig);
  }
  getStorage() {
    return getStorage(this.firebaseConfig);
  }
}
