# 🛡️ HoneyPhish: Vendor Security Awareness Simulation Platform

**HoneyPhish** is a comprehensive simulation platform designed to help organizations evaluate and enhance the security awareness of their third-party vendors. By deploying realistic phishing simulations, HoneyPhish tracks vendor actions, calculates scores, and visualizes performance data through an engaging, gamified interface. This ensures vendors maintain strong cybersecurity practices when handling sensitive data.

---

## 🔍 Overview

In today's interconnected digital landscape, organizations frequently share sensitive data with third-party vendors. **HoneyPhish** acts as a crucial defense layer by:

- **Simulating Phishing Emails**: Sending realistic phishing simulation emails to vendors.
- **Action Tracking**: Monitoring whether vendors click on links or report suspicious emails.
- **Automated Scoring**: Dynamically adjusting scores based on user behavior.
- **Real-time Data Visualization**: Offering performance insights through an intuitive dashboard.
- **Gamified Leaderboard**: Encouraging security awareness through badges and rankings.

---

## 💡 Use Case

**Scenario 1: Clicked Phishing Link (❌)**  
- Vendor is redirected to a **“Test Failed”** page.  
- Score decreases.  
- Leaderboard rank drops to reinforce improvement areas.

**Scenario 2: Reported Phishing Email (✅)**  
- Score increases.  
- Rank improves on the leaderboard.  
- A badge is awarded, reinforcing secure behavior.

HoneyPhish builds long-term security awareness by delivering real-time feedback, engaging UI, and measurable metrics—all within a controlled simulation.

---

## ⚙️ Key Features

| Component             | Description                                                                         | Status      |
|----------------------|-------------------------------------------------------------------------------------|-------------|
| 📥 Fake Mailbox UI    | Simulates a realistic inbox with phishing and legitimate emails.                   | ✅ Done      |
| 📉 Fail Page         | Displays failure message upon phishing click and reduces score.                    | ✅ Done      |
| 📊 Admin Dashboard   | Allows internal teams to track vendor performance and actions.                     | ✅ Done      |
| 🏆 Leaderboard       | Ranks vendors by awareness score and badge tier.                                   | ✅ Done      |
| 📧 Email Simulation  | Sends simulated phishing emails for behavioral testing.                            | ✅ Done      |
| 📈 Reporting System  | Generates detailed performance reports.                                             | ✅ Done      |

---

## 🏅 Badge System

| Badge         | Score Range | Description                                               |
|---------------|-------------|-----------------------------------------------------------|
| 🏆 Platinum    | ≥ 90        | Elite awareness – exceptional security practices          |
| 🥇 Gold        | ≥ 80        | Advanced understanding of cybersecurity                   |
| 🥈 Silver      | ≥ 70        | Strong baseline of security awareness                     |
| 🥉 Bronze      | ≥ 60        | Basic security training – room for improvement            |
| ❌ None        | < 60        | Needs improvement – at risk of security breaches          |

---

## 🧠 Tech Stack

- **Frontend**: React (TypeScript), Tailwind CSS, Vite  
- **Icons**: Lucide React  
- **Logic**: Local state + mock data (can be extended to API/database)

---

## 🌐 Deployment

🚀 **Live Demo:**  
🔗 [https://phishing-awareness-platform.netlify.app](https://phishing-awareness-platform.netlify.app)

Feel free to explore the simulation and test the interactions in real time.

---

## 📜 Project Background

**HoneyPhish** originated as an idea I independently conceptualized and built, focused on training and evaluating vendors on phishing awareness through gamified simulations and automated scoring.

This version was developed entirely by me — including the phishing mailbox UI, scoring logic, failure system, dashboard, and leaderboard mechanics.

Later, the concept was adapted as the foundation for a **cybersecurity hackathon project**, where it was collaboratively expanded to align with the theme of *"Building Trust in Retail with Cybersecurity."* However, this repository represents my original vision, fully implemented as a solo project.

HoneyPhish addresses a growing need for vendor-side security accountability and empowers enterprises to build trust through transparency, simulation, and ongoing security education.


