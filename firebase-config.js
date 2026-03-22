// ============================================================
//  firebase-config.js
//  Configuración compartida de Firebase para MobileExpressHN
//  Edita SOLO este archivo con tus credenciales reales.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};

// Inicializa Firebase una sola vez (lo usan script.js y admin-firebase.html)
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const db   = firebase.firestore();
const auth = firebase.auth();
