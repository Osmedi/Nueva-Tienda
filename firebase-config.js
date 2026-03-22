// ============================================================
//  firebase-config.js
//  Configuración compartida de Firebase para MobileExpressHN
// ============================================================
 
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDECEJdhkQxdsP3GcLtdJSUJGGreyaHUag",
  authDomain:        "mobileexpresshn-af354.firebaseapp.com",
  projectId:         "mobileexpresshn-af354",
  storageBucket:     "mobileexpresshn-af354.firebasestorage.app",
  messagingSenderId: "851553673604",
  appId:             "1:851553673604:web:ee8255e28b167f83a73dd1"
};
 
// Inicializa Firebase una sola vez (sintaxis compat)
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
 
const db   = firebase.firestore();
const auth = firebase.auth();