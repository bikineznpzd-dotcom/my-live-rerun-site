# My Live Rerun Studio Website

เว็บไซต์ภาษาอังกฤษแบบ Static สำหรับแนะนำ My Live Rerun Studio และเผยแพร่ผ่าน GitHub Pages

- Repository: `https://github.com/bikineznpzd-dotcom/my-live-rerun-site`
- Deployment source: Branch `main`, Folder `/ (root)`
- Public URL: `https://bikineznpzd-dotcom.github.io/my-live-rerun-site/`
- ไม่ต้อง Build หรือติดตั้ง Package

My Live Rerun Studio เป็นแอปพลิเคชัน Windows ที่พัฒนาโดยบุคคลธรรมดาในประเทศไทย แอปและเว็บไซต์นี้ไม่ใช่ผลิตภัณฑ์ทางการของ TikTok และไม่ได้อ้างว่าเกี่ยวข้อง ได้รับการสนับสนุน หรือรับรองโดย TikTok

## ไฟล์เว็บไซต์

- `index.html` — Home
- `privacy.html` — Privacy Policy มีผลวันที่ 2026-10-23
- `terms.html` — Terms of Service มีผลวันที่ 2026-10-23
- `support.html` — Support
- `404.html` — หน้า URL ที่ไม่พบ
- `assets/styles.css` — Modern Dark Theme และ Responsive Layout
- `assets/main.js` — เมนูมือถือและปีปัจจุบัน
- `robots.txt` — อนุญาตการทำดัชนีเว็บไซต์
- `.nojekyll` — ให้ GitHub Pages เสิร์ฟไฟล์ Static โดยตรง

รายงานตรวจภายในและ Source Code ของโปรแกรม Desktop ไม่ได้เป็นส่วนหนึ่งของเว็บไซต์ที่จะเผยแพร่

## เปิดดูในเครื่อง

สามารถเปิด `index.html` โดยตรง หรือใช้ Static HTTP server ที่เชื่อถือได้เพื่อทดสอบ URL, assets และหน้า 404 ก่อนเผยแพร่

## การเผยแพร่

1. ตรวจว่า Git remote คือ `https://github.com/bikineznpzd-dotcom/my-live-rerun-site.git`
2. ตรวจ `git status`, `git diff` และ `git diff --check`
3. ตรวจว่าไม่มี Desktop Source, Client Secret, Token, Stream Key, Log, Video, user-data หรือ Credential
4. Stage เฉพาะไฟล์เว็บไซต์ที่ตรวจสอบแล้วโดยระบุชื่อไฟล์
5. ตรวจ Staged Diff ก่อน Commit
6. Push ไปที่ `origin/main` โดยไม่ใช้ Force Push
7. ตั้งค่า GitHub Pages เป็น **Deploy from a branch**, Branch **main**, Folder **/ (root)**
8. ตรวจทุกหน้าที่ URL สาธารณะผ่าน HTTPS

## ข้อจำกัดปัจจุบัน

- Production Auth Broker ยังไม่รวมอยู่ในโปรเจกต์ Desktop ที่ตรวจสอบ
- TikTok Login Kit แบบ end-to-end และ TikTok LIVE จริงยังไม่ได้ยืนยัน
- Login Kit ไม่ได้ให้สิทธิ์ LIVE หรือ Stream Key โดยอัตโนมัติ
- ห้ามเก็บ Client Secret ในเว็บไซต์หรือโปรแกรม Desktop

## ติดต่อ

General support, privacy และ legal inquiries: `bikineznpzd@gmail.com`
