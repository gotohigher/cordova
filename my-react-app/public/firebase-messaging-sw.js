importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyD0v7TvsCdAyxt8F_HSkozLbfUJfvQzEoE",
  authDomain: "android-pushnotification-c7e33.firebaseapp.com",
  projectId: "android-pushnotification-c7e33",
  storageBucket: "android-pushnotification-c7e33.appspot.com",
  messagingSenderId: "350708747450",
  appId: "1:350708747450:web:4515329633d4c939084683",
  measurementId: "G-TN6XWE7XJ5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();