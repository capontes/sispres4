import * as dotenv from "dotenv";
dotenv.config();
if (process.env.NEXT_PUBLIC_FIREBASE_CONFIG == undefined)
  throw Error("Error en Claves");

export const FirebaseConfig = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG
);
// {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
//   projectId: process.env.NEXT_PUBLIC_PROYECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID,
// };
