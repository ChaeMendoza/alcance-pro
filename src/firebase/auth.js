// src/firebase/auth.js
import { getAuth } from "firebase/auth";
import { app } from "./firebase"; // asegúrate de exportar 'app' en firebase.js

export const auth = getAuth(app);

