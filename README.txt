# 🌐 AI-Powered Phishing Email Detector (Advanced Version)

Created by **[@jananitkt](https://github.com/jananitkt)**, this project simulates real-world phishing detection using AI-like pattern analysis.

---

## 🔐 What It Does

- ✅ Flags suspicious phishing phrases using smart pattern matching
- ✅ Calculates RISK LEVEL: Low, Medium, or High
- ✅ Displays explanations like AI-generated threat analysis
- ✅ Responsive Bootstrap interface (mobile-friendly)
- ✅ Designed for interns, students, or early-career cybersecurity talent

---

## 🚀 How to Run Locally

1. **Unzip the folder**
2. Open Terminal and navigate to folder:

```bash
cd phishing-detector-pro
```

3. **Install dependencies**

```bash
npm install express cors
```

4. **Run the server**

```bash
node server.mjs
```

5. **Open your browser** and go to:

```
http://localhost:3000
```

Paste sample email content to simulate AI phishing detection!

---

## 📚 How It Works

This project uses a list of 11+ phishing patterns like:

- "click here"
- "verify your account"
- "your account is suspended"
- "act now"
- "free gift"

It scores them using logic:
- 0–1 matches: ✅ Low Risk
- 2–4 matches: ⚠️ Medium Risk
- 5+ matches: 🔥 High Risk

The frontend explains the result with real-time feedback and reasoning — just like an AI assistant.

---


# 🖼️ Screenshots to Capture for GitHub/Portfolio

## ✅ 1. Low Risk Example
Paste content:
"Hi, your monthly newsletter is ready. Click to read."

Expected Output:
- Risk Level: LOW (green)
- Message: "This email appears safe."

## ⚠️ 2. Medium Risk Example
Paste content:
"Please verify your account and click here to reset your password."

Expected Output:
- Risk Level: MEDIUM (orange)
- Message: Caution with 2-4 patterns detected.

## 🔥 3. High Risk Example
Paste content:
"URGENT! Your account is suspended. Click here to confirm your identity immediately and win a reward."

Expected Output:
- Risk Level: HIGH (red)
- Message: Multiple dangerous phrases detected.


---

## 🧠 What Janani Learned

- Full-stack Node.js development
- Regex and threat modeling logic
- Secure UX practices
- How phishing language is constructed
- AI-style communication interface

---

## 🤝 Open to Collaboration

Want to contribute smarter AI detection? Add:
- ML-based natural language detection
- Email header parsing
- External phishing domain checker API

---

## 📃 License

MIT – For educational and demo purposes.
