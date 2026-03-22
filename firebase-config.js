// ============================================================
//  firebase-config.js
//  Configuración compartida de Firebase para MobileExpressHN
//  Edita SOLO este archivo con tus credenciales reales.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDECEJdhkQxdsP3GcLtdJSUJGGreyaHUag",
  authDomain: "mobileexpresshn-af354.firebaseapp.com",
  projectId: "mobileexpresshn-af354",
  storageBucket: "mobileexpresshn-af354.firebasestorage.app",
  messagingSenderId: "851553673604",
  appId: "1:851553673604:web:ee8255e28b167f83a73dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db   = firebase.firestore();
const auth = firebase.auth();
