import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa0Bx5h3EEGzUG3RnIIPZfDXpBacwom44",
  authDomain: "glimmergrid-7bb70.firebaseapp.com",
  databaseURL: "https://glimmergrid-7bb70-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "glimmergrid-7bb70",
  storageBucket: "glimmergrid-7bb70.firebasestorage.app",
  messagingSenderId: "631358971674",
  appId: "1:631358971674:web:94c1635cbb4ffeaa8e56a3",
  measurementId: "G-M5PDFDWEQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeApp(app);
const db = getDatabase(app);

export { auth, db };

