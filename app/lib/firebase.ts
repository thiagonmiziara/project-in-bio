import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import "server-only";

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '';

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: privateKey
});


if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
  });
}

export const db = getFirestore();
