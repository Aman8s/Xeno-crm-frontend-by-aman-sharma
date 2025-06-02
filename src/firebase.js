import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlrKDmt0cXgU_ny9QZpaVeYK8l5k0lWDw",
  authDomain: "xeno-crm-auth-49c97.firebaseapp.com",
  projectId: "xeno-crm-auth-49c97",
  storageBucket: "xeno-crm-auth-49c97.firebasestorage.app",
  messagingSenderId: "491642243446",
  appId: "1:491642243446:web:b340202231f20f94521257"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
