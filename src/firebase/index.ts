import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhy9Qlo2g26sxC2dmQ5ExLbNE6cbuDzwI",
  authDomain: "kuchkarov-app.firebaseapp.com",
  projectId: "kuchkarov-app",
  storageBucket: "kuchkarov-app.appspot.com",
  messagingSenderId: "1056849378298",
  appId: "1:1056849378298:web:e219da2a481e10d5aa4243",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
