// firebase-messaging-sw.js
// نسخة مبسطة — بدون Cloud Function

// ─── لما يضغط على الإشعار ───────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = '/Gchat/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for(const client of list){
        if(client.url.includes('/Gchat') && 'focus' in client){
          return client.focus();
        }
      }
      if(clients.openWindow) return clients.openWindow(target);
    })
  );
});

// ─── تفعيل الـ SW فوراً ────────────────────────────────────
self.addEventListener('install',  e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
