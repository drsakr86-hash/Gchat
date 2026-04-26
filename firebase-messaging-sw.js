// firebase-messaging-sw.js
// ⚠️ لازم يتحط في نفس مجلد index.html على GitHub

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

// ─── رسائل الخلفية ───────────────────────────────────────────
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  const data = payload.data || {};

  self.registration.showNotification(title || 'Gchat 💬', {
    body: body || 'رسالة جديدة',
    icon: icon || '/Gchat/icon.png',
    badge: '/Gchat/icon.png',
    tag: data.chatId || 'gchat-msg',       // نفس الـ tag = يحل الإشعار السابق بدل ما يكدّسها
    renotify: true,
    vibrate: [200, 100, 200],
    data: { url: data.url || '/Gchat/', chatId: data.chatId }
  });
});

// ─── لما يضغط على الإشعار ───────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = event.notification.data?.url || '/Gchat/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      // لو التطبيق مفتوح → ركّز عليه
      for (const client of list) {
        if (client.url.includes('/Gchat') && 'focus' in client) {
          return client.focus();
        }
      }
      // لو مش مفتوح → افتحه
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});
