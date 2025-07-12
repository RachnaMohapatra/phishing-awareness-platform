# 🛡️ HoneyPhish: Vendor Security Awareness Simulation Platform

**HoneyPhish** is a simulation platform designed to help e-commerce companies evaluate and improve the security awareness of their third-party vendors. Through realistic phishing simulations, HoneyPhish tracks employee actions, awards scores, and visualizes performance data in an engaging, gamified interface.

---

## 🔍 Overview

In large-scale enterprises like e-commerce companies, sensitive data often passes through third-party vendors. **HoneyPhish** helps ensure vendors maintain strong security hygiene by:

- Sending phishing simulation emails from `HoneyPhish@company.com`.
- Tracking whether vendors click links or report the email.
- Automatically adjusting scores based on actions.
- Displaying real-time performance data to internal security teams.
- Encouraging healthy competition with a vendor-facing leaderboard.

---

## 💡 Use Case

During a phishing simulation:

- ❌ If a vendor **clicks** the phishing link:  
  → They're redirected to a **"Test Failed"** page  
  → Their **score decreases**  
  → Their **rank drops** on the leaderboard

- ✅ If a vendor **reports** the phishing email:  
  → Their **score increases**  
  → Their **rank improves**  
  → They're rewarded with a **badge**

This project ensures vendors handling user data are regularly tested and trained in a safe, gamified, and automated way.

---

## 📄 Key Features

| Component            | Description                                                                  |
|----------------------|------------------------------------------------------------------------------|
| 📥 **Fake Mailbox UI** | Simulates a realistic email inbox with phishing and legitimate messages      |
| 📉 **Fail Page**       | Displays when a user clicks a phishing link – deducts score                  |
| 📊 **Admin Dashboard** | Allows the company's employees to track vendor performance in real-time      |
| 🏆 **Leaderboard**     | Displays vendor rankings, scores, and badge levels                           |

---

## 🏅 Badge System

Vendors earn badges based on their current score:

| Badge        | Score Range | Description               |
|--------------|-------------|---------------------------|
| 🏆 **Platinum**   | ≥ 90        | Elite Security Expert     |
| 🥇 **Gold**       | ≥ 80        | Advanced Security         |
| 🥈 **Silver**     | ≥ 70        | Good Security Awareness   |
| 🥉 **Bronze**     | ≥ 60        | Basic Security Training   |
| ❌ **None**       | < 60        | Needs Improvement         |

---

## 🧠 Tech Stack

- **Frontend**: React (TypeScript), Tailwind CSS, Vite  
- **Icons**: Lucide React  
- **Logic**: Local state + mock data  

---

## 🌐 Deployment

🚀 The project is live and hosted on **Netlify**:  
🔗 [https://phishing-awareness-platform.netlify.app](https://phishing-awareness-platform.netlify.app)

You can visit the link above to interact with the simulation and explore all features in action.

---

## 🛠️ Project Background

> **HoneyPhish** was developed as part of a broader group submission during a hackathon.  
> This entire simulation module – including the idea, design, and implementation – was **solely conceptualized and built by me** as my individual contribution to the project.
