import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Log para debug (verificar se as variáveis estão chegando)
let teste = () => {
  console.log("[Firebase] Config recebida:", {
    apiKey: firebaseConfig.apiKey ? "OK" : "MISSING",
    authDomain: firebaseConfig.authDomain ? "OK" : "MISSING",
    projectId: firebaseConfig.projectId ? "OK" : "MISSING",
    storageBucket: firebaseConfig.storageBucket ? "OK" : "MISSING",
    messagingSenderId: firebaseConfig.messagingSenderId ? "OK" : "MISSING",
    appId: firebaseConfig.appId ? "OK" : "MISSING",
  });
}


// Inicialização segura (evita múltiplas instâncias)
let app: FirebaseApp;
let db: Firestore;

function initializeFirebase() {
  if (getApps().length === 0) {
    console.log("[Firebase] Inicializando nova instância...");
    teste();
    app = initializeApp(firebaseConfig);
  } else {
    console.log("[Firebase] Reutilizando instância existente...");
    app = getApps()[0];
  }
  db = getFirestore(app);
  return { app, db };
}

const { db: firestoreDb } = initializeFirebase();

export { firestoreDb as db };