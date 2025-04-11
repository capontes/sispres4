import * as dotenv from "dotenv";
dotenv.config();

export const FirebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROYECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINSENDERID,
  appId: process.env.APPID,
};
