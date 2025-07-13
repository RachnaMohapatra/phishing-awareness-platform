# 🛡️ HoneyPhish: Vendor Security Awareness Simulation Platform

**HoneyPhish** is a comprehensive simulation platform designed to help organizations evaluate and enhance the security awareness of their third-party vendors. By deploying realistic phishing simulations, HoneyPhish tracks vendor actions, calculates scores, and visualizes performance data through an engaging, gamified interface. This helps ensure vendors maintain strong security practices when handling sensitive data.

---

## 🔍 Overview

In today's interconnected digital landscape, organizations often share sensitive data with third-party vendors. **HoneyPhish** serves as a crucial tool to ensure these vendors adhere to robust security standards by:

- **Simulating Phishing Emails**: Sending realistic phishing simulation emails to vendors.
- **Action Tracking**: Monitoring whether vendors click on links or report the suspicious emails.
- **Automated Scoring**: Automatically adjusting scores based on vendor actions.
- **Real-time Data Visualization**: Providing internal security teams with real-time performance data through an intuitive dashboard.
- **Gamified Leaderboard**: Fostering healthy competition and engagement through a vendor-facing leaderboard.

---

## 💡 Use Case

Consider the following scenarios during a phishing simulation:

- ❌ **Scenario 1: Clicked Phishing Link**
  - If a vendor clicks on the phishing link:
    - → They are redirected to a **"Test Failed"** page, reinforcing the importance of vigilance.
    - → Their **score decreases**, reflecting the security lapse.
    - → Their **rank drops** on the leaderboard, creating awareness and encouraging improvement.

- ✅ **Scenario 2: Reported Phishing Email**
  - If a vendor reports the phishing email:
    - → Their **score increases**, acknowledging their security awareness.
    - → Their **rank improves** on the leaderboard, motivating continued diligence.
    - → They are rewarded with a **badge**, recognizing their achievement.

This project ensures that vendors who handle user data undergo regular testing and training in a secure, gamified, and automated environment, thereby reducing the risk of security breaches.

---

## ⚙️ Key Features

| Component             | Description                                                                         | Status      |
|----------------------|-------------------------------------------------------------------------------------|-------------|
| 📥 Fake Mailbox UI    | Simulates a realistic email inbox with both phishing and legitimate messages.        | Implemented |
| 📉 Fail Page         | Displays when a user clicks a phishing link and deducts their score.                 | Implemented |
| 📊 Admin Dashboard   | Allows internal teams to track vendor performance in real-time.                      | Implemented |
| 🏆 Leaderboard       | Displays vendor rankings, scores, and earned badges to encourage competition.       | Implemented |
| 📧 Email Simulation  | Functionality to send simulated phishing emails to vendor accounts.                | Implemented |
| 📈 Reporting System  | Generates detailed reports on vendor performance and simulation results.            | Implemented |

---

## 🏅 Badge System

Vendors earn badges based on their cumulative score, which reflects their security awareness and performance in the simulations:

| Badge        | Score Range | Description                       |
|--------------|-------------|-----------------------------------|
| 🏆 **Platinum**   | ≥ 90        | Elite Security Expert - Demonstrates exceptional security awareness. |
| 🥇 **Gold**       | ≥ 80        | Advanced Security - Exhibits strong security practices.            |
| 🥈 **Silver**     | ≥ 70        | Good Security Awareness - Shows a solid understanding of security protocols. |
| 🥉 **Bronze**     | ≥ 60        | Basic Security Training - Requires further improvement.              |
| ❌ **None**       | < 60        | Needs Improvement - Indicates a significant lack of security awareness.     |

---

## 🧠 Tech Stack

- **Frontend**: React (TypeScript), Tailwind CSS, Vite
- **Icons**: Lucide React
- **Logic**: Local state + mock data

---

## 🌐 Deployment

🚀 The project is live and hosted on **Netlify**:  
🔗 [https://phishing-awareness-platform.netlify.app](https://phishing-awareness-platform.netlify.app)

Feel free to explore the platform and interact with the simulation to see all the features in action.

---

## 🛠️ Project Background

This project was initially developed during a cybersecurity hackathon. The entire concept, design, and implementation of this simulation module—including the phishing mailbox UI, scoring system, leaderboard, and dashboard—were independently created by me.

The platform emulates real-world vendor risk scenarios and aligns with the strategies used by large-scale product companies to ensure third-party security compliance, providing a practical and effective solution for enhancing vendor security awareness.
