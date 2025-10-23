# 🚀 WapSpeed — Offline Payment System

**WapSpeed** is a cutting-edge **React Native mobile application** designed to enable **secure offline payments** using **QR code scanning** and **encrypted SMS transactions**.  

It allows customers in **remote areas without internet access** to complete payment transactions seamlessly by decoding a QR code and sending the payment details via SMS to a **listening soundbox device** — all while **working completely offline**.

---

## 💡 Key Idea

> WapSpeed bridges the gap between cashless payments and internet limitations — empowering users to transact digitally even in offline environments.

---

## ⚙️ Core Features

- 📷 **QR Code Scanning**  
  Use the device’s camera to **decode QR codes** that contain payment or merchant details.

- 🔐 **Offline Encrypted SMS Payment**  
  Send **AES-encrypted SMS** messages containing payment info to a **soundbox listener**, ensuring secure offline transaction processing.

- 📡 **Fully Offline Workflow**  
  All core functions — from scanning to payment — work **without an internet connection**.

- 🧠 **State Management with Redux Toolkit**  
  Smooth and predictable state management for user sessions, SMS queues, and transaction logs.

- 💬 **Listening Soundbox Integration**  
  A paired hardware or backend component receives the SMS and confirms transactions via audio signals or local sync.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React Native (Expo / CLI)** | Cross-platform mobile app framework |
| **Redux Toolkit** | State management and offline data handling |
| **Camera API** | QR code decoding via device camera |
| **SMS API / Native Module** | Sending encrypted payment data over SMS |
| **AES Encryption** | Data protection and message confidentiality |
| **LocalStorage / AsyncStorage** | Offline transaction storage and retry queue |

---

## 🔒 Security

- All transaction data is **AES encrypted** before being sent.  
- Sensitive information never leaves the device unencrypted.  
- Offline data is stored locally using **AsyncStorage** and cleared after confirmation.

---

## 🧠 App Workflow

1. **User scans a merchant QR code** via the device camera.  
2. The app **extracts and encrypts** the payment information.  
3. The encrypted data is **sent as an SMS** to the listening soundbox.  
4. The **soundbox receives, decrypts, and processes** the payment.  
5. The app logs the transaction locally until a sync confirmation is received.  

> 💬 Every step of the process is optimized for low-power, low-signal environments — ensuring reliable offline payments.

---

## 📱 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ibeenoch/wapspeed-offline-payment.git
cd wapspeed-offline-payment
