# Gchat APK — خطوات التحويل لـ APK

## هيكل الملفات على GitHub

```
Gchat/
├── index.html                    ← gchat-app.html (غيّر اسمه)
├── manifest.json                 ← ملف الـ PWA
├── firebase-messaging-sw.js      ← Service Worker
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── .github/
    └── workflows/
        └── build-apk.yml         ← GitHub Action للبناء التلقائي
```

---

## الطريقة 1 — PWABuilder (الأسهل، بدون كود)

1. افتح 👉 **https://www.pwabuilder.com**
2. أدخل رابط تطبيقك: `https://drsakr86-hash.github.io/Gchat`
3. اضغط **Start**
4. اختار **Android** ثم **Generate Package**
5. حمّل ملف `.apk` مباشرة ✅

---

## الطريقة 2 — GitHub Actions (تلقائي مع كل push)

### الخطوات:
1. ارفع كل الملفات على GitHub
2. روح **Actions** tab في الـ repo
3. هتلاقي workflow اسمه **Build Gchat APK**
4. اضغط **Run workflow**
5. بعد 3-5 دقائق اضغط على الـ run ونزّل الـ **Gchat-APK** من **Artifacts**

---

## الطريقة 3 — Capacitor (أفضل أداء)

```bash
npm install -g @capacitor/cli @capacitor/core @capacitor/android
npx cap init Gchat com.gchat.app --web-dir .
npx cap add android
npx cap sync
npx cap open android   # هيفتح Android Studio
```
في Android Studio: **Build → Generate Signed APK**

---

## ملاحظات مهمة

- الـ APK مش هينزل على Google Play بدون **signing**
- للـ Play Store محتاج **keystore file** — اسألني لو محتاج
- الـ PWABuilder بيوفر APK جاهز للتثبيت المباشر بدون Play Store
