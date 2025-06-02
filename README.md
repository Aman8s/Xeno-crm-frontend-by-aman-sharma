# Xeno CRM - Frontend (React.js)

## 🌐 Overview

This is the frontend part of the Xeno CRM system. It is built using *React.js* and provides a user-friendly interface for:

* Google authentication
* Creating smart customer segments
* AI-based rule generation
* Managing and visualizing campaign communication logs

---

## 🔧 Tech Stack

* *React.js* (with functional components and hooks)
* *Axios* for HTTP requests
* *Firebase Auth* (Google login)
* *React Router DOM* for routing
* *Netlify* for deployment

---

## 📁 Folder Structure


frontend/
├── public/                  # Public assets
├── src/
│   ├── pages/               # Page components (CampaignBuilder, CampaignLogs, etc.)
│   ├── App.js               # App routing and protected routes
│   ├── firebase.js          # Firebase configuration
│   └── index.js             # Entry point
└── .env                     # Environment config (not committed)


---

## 🔐 Environment Variables

Create a .env file inside the frontend/ folder:

env
REACT_APP_API_URL=https://xeno-crm-backend.onrender.com
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id


> ⚠ Make sure these are prefixed with REACT_APP_ as required by React.

---

## 🚀 How to Run Locally

bash
cd frontend
npm install
npm start


Frontend will run on:


http://localhost:3000


Make sure the backend is running at the correct API URL.

---

## 🔐 Authentication (Google OAuth)

* Uses Firebase Auth to authenticate users
* Only authenticated users can access campaign creation and logs
* User state is stored in localStorage

---

## 🌟 Features

* *Login Page*: Sign in via Google
* *Campaign Builder*:

  * Manually define segmentation rules
  * Use AI (OpenAI) to generate rules from plain English
* *Campaign Logs*:

  * View SENT / FAILED delivery results
  * Time-stamped logs per customer per campaign

---

## 🚀 Deployment (Netlify)

1. Push frontend to GitHub
2. Go to [https://netlify.com](https://netlify.com)
3. Create new site → Connect to GitHub repo
4. Set build settings:

   * *Build command*: npm run build
   * *Publish directory*: build
5. Add the same .env values in Netlify dashboard as environment variables
6. Deploy 🚀

---

## 📜 License

This frontend is for demo and educational purposes only.

