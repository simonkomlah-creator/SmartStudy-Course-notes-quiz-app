// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7RnTpD4wRcSsEryhfQKD-ksBw0w0f4dk",
  authDomain: "code-well-72db2.firebaseapp.com",
  projectId: "code-well-72db2",
  storageBucket: "code-well-72db2.firebasestorage.app",
  messagingSenderId: "748471547756",
  appId: "1:748471547756:web:51a0843689aa9f6da26549",
  measurementId: "G-ZHV1MPG2XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get form elements
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginSubmitButton = document.getElementById('login-submit');

const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const signupSubmitButton = document.getElementById('signup-submit');

// Login functionality
if (loginEmailInput && loginPasswordInput && loginSubmitButton) {
  loginSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    console.log('Signing in user with email:', email);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        alert('Login successful!');
         window.location.href = 'home.html';
        // You can redirect to another page here
        // window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
        alert('Error signing in: ' + errorMessage);
      });
  });
} else {
  console.error("Login form elements not found.");
}

// Signup functionality
if (signupEmailInput && signupPasswordInput && signupSubmitButton) {
  signupSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    console.log('Creating user with email:', email);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
        alert('User created successfully!');
         window.location.href = 'home.html';
        // You can redirect to another page here
        // window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating user:', errorCode, errorMessage);
        alert('Error creating user: ' + errorMessage);
      });
  });
} else {
  console.error("Signup form elements not found.");
}
