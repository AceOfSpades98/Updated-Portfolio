# 🌐 Portfolio

This is the updated version of my personal portfolio website, built using a full-stack approach with **React**, **CSS**, **Node.js**, and **PostgreSQL**. The site is designed to showcase my work, skills, and provide a way for visitors to connect with me.

SOME SCREEN SIZES CURRENTLY NOT SUPPORTED INCLUDING:

- Skills tiles strecthing to fill screen on Ipad Mini and Pro, Surface Pro 7, Asus Zenbook Fold (Portrait Mode)
- Header broken on Surface Duo
- Contents squished on Nest Hub

Will be fixing this in the future. Sorry for the inconvenience. If any other screen sizes look wonky please let me know.

## ✨ Overview

This project is a modern, responsive, and performance-focused web portfolio. It emphasizes clean UI, accessibility, and maintainable code. It also includes a backend powered by Node.js and PostgreSQL for dynamic features like contact form submissions and (optionally) content management.

## 🛠️ Built With

### Frontend
- **React** – component-based UI
- **CSS** – styling and layout
- **JavaScript (ES6+)** – scripting and interactivity

### Backend
- **Node.js** – server-side runtime
- **Express.js** – lightweight server framework
- **PostgreSQL** – relational database for storing data (e.g., contact form submissions, project content)


## 📁 Features

- Fully responsive and accessible layout
- Contact form with backend integration
- Project section powered by database
- Clean, modern design
- Future support for content management

## 🔧 Backend Email Integration To-Do

### Goal: Secure, scalable contact form with spam protection and email delivery

### ✅ 1. Set Up Backend Email Service
- [ ] Create a backend API route (`/api/contact`) using Express.js or Vercel serverless function
- [ ] Install and configure `nodemailer` or `@sendgrid/mail`
- [ ] Use environment variables for email credentials (e.g., `.env` file)

### ✅ 2. Validate & Sanitize Inputs
- [ ] Check for required fields: name, email, message
- [ ] Validate email format with regex or `validator.js`
- [ ] Limit message length and strip HTML

### ✅ 3. Add Spam Protection
- [ ] Add a hidden "honeypot" input field to trap bots
- [ ] (Optional) Add Google reCAPTCHA v3 for advanced bot detection
- [ ] (Optional) Use `express-rate-limit` to prevent abuse

### ✅ 4. Connect Frontend to Backend
- [ ] Replace default `handleSubmit` in React with `fetch('/api/contact', {...})`
- [ ] Handle loading state and show success/failure messages

### ✅ 5. Test and Deploy
- [ ] Test form with valid/invalid inputs
- [ ] Deploy frontend and backend on Vercel, Netlify, or Render