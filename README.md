# Blendwagen — Mobile Coffee Shop Landing Page (Sprint 2)

Single-page React landing page for Blendwagen, built using React and Vite framework

## Tech Stack
- **Frontend Framework:** React
- **Build Tool & Dev Environment:** Vite
- **Styling:** CSS
- **Backend:** Vercel API to Resend email service
- **Deployment:** Vercel

## Live Demo
Live fully functional demo page is built on Vercel production server at the following address:
- **URL:** [https://blendwagen.vercel.app/](https://blendwagen.vercel.app/)

## Quick Start / Local Installation

1. **Clone or extract full repository to a local project folder**
2. **Install dependencies: run terminal command inside the project folder**
    ```bash
    npm install
    ```
3. **Run the local development server: run terminal command inside the project folder**
    ```bash
    npm run dev
    ```
Open http://localhost:5173 in your browser

## Limitations of functionality on local development server
The inquiry form in the Delivery section uses an external email service (Resend) via a backend function (/api/inquiry.js). Because the secure Resend API keys are configured exclusively on the Vercel production server, submitting the form in local environment will not dispatch live emails and will return an error. Fully functional inquiry submissions can be tested directly on the live demo at https://blendwagen.vercel.app/
