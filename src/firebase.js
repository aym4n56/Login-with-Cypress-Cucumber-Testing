import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = {
  apiKey: "AIzaSyCIoNFldml81jD3M8Y8NqycXQnOKyyBObY",
  authDomain: "login-f2f80.firebaseapp.com",
  projectId: "login-f2f80",
  storageBucket: "login-f2f80.appspot.com",
  messagingSenderId: "153348589219",
  appId: "1:153348589219:web:c2da24cb6741a2f393a116"
};

const app = initializeApp(firebase);
const auth = getAuth(app);

export { auth };
