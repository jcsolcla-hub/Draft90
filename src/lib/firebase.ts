import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInAnonymously as firebaseSignInAnonymously, 
  signOut as firebaseSignOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfsghBlnSSIIKP9JP6cmSzPHKLxnxNuis",
  authDomain: "draft90-5f915.firebaseapp.com",
  projectId: "draft90-5f915",
  storageBucket: "draft90-5f915.firebasestorage.app",
  messagingSenderId: "161981127757",
  appId: "1:161981127757:web:295e68e6def1bb43ddd004",
  measurementId: "G-KCWEFFZN05"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error logging in with Google:", error);
    throw error;
  }
};

export const signInAnonymously = async () => {
  try {
    const result = await firebaseSignInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error("Error logging in anonymously:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { onAuthStateChanged };
export type { User };
