import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-LfXC0GTKsxGy18_UwkpOEN45OEUiZF0",
  authDomain: "react-practice-727e4.firebaseapp.com",
  projectId: "react-practice-727e4",
  storageBucket: "react-practice-727e4.appspot.com",
  messagingSenderId: "145899000627",
  appId: "1:145899000627:web:0339da190371138675a446",
  measurementId: "G-L59TVWJ5C8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
