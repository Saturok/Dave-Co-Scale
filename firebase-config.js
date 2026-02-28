// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, set, update, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// YOUR SPECIFIC CONFIGURATION
const firebaseConfig = {
  // 1. The Database URL you provided:
  databaseURL: "https://scale-attendee-app-default-rtdb.firebaseio.com",
  
  // 2. IMPORTANT: You need these other keys from the Firebase Console!
  // Go to Project Settings > General > "Your apps" > SDK Setup and Config
  apiKey: "AIzaSyA0iHoRBo4bB3dnFEeBgqG3MzbgEXFEzPg", 
  authDomain: "scale-attendee-app.firebaseapp.com", // Likely this based on your DB name
  projectId: "scale-attendee-app",                  // Likely this based on your DB name
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// This tells the app exactly where to listen
const scaleRef = ref(db, 'scale_data'); 

export { db, scaleRef, set, onValue, update, increment };