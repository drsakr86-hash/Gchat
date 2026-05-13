// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDWkoKwK7sgKOQ-8eTiMaLtCX0NwbWQC7Y",
  authDomain: "chat-641b0.firebaseapp.com",
  projectId: "chat-641b0",
  storageBucket: "chat-641b0.firebasestorage.app",
  messagingSenderId: "438618691190",
  appId: "1:438618691190:web:9dd86082d9ba927366b157"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  const options = {
    body: body,
    icon: '/Gchat/icon.png',
    badge: '/Gchat/icon.png',
    vibrate: [200, 100, 200],
    data: payload.data
  };
  self.registration.showNotification(title, options);
});