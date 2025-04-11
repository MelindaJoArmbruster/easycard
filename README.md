# Easycard 📬  
*A Fullstack SPA for Sending Personalized Postcards via Real Mail*

![Easycard Architecture](./stackathonWhiteBoard.png)

## Overview

**Easycard** is a mobile-first, single page application (SPA) for creating and sending customized postcards through real-world direct mail services. This project is designed, built, and maintained entirely by me — Melinda Armbruster — as part of my Fullstack Academy self-study capstone. I continue to evolve the app for potential commercial release.

This is a fully integrated, end-to-end application connecting a modern front-end, a Node.js backend, a PostgreSQL database, and multiple third-party APIs including Lob (for direct mail), Stripe (for payment processing), and Google OAuth (for authentication).

---

## Features

- 📸 **Browse & Customize Postcards**  
  A dynamic gallery allows users to select and personalize postcard templates using a responsive React/Redux interface.

- 💳 **Pay with Stripe**  
  Seamless payment flow through the Stripe API allows users to complete their order with a credit card.

- 📬 **Send Real Mail via Lob API**  
  The app integrates with the Lob Direct Mail API to send postcards to real mailing addresses. Users receive visual confirmation of the exact printed postcard.

- 🧠 **User Authentication with Google OAuth**  
  Google login provides a secure and user-friendly authentication mechanism.

- 🔄 **Fullstack Data Flow**  
  Efficient back-to-back API calls on the server coordinate the Stripe charge and Lob printing while storing postcard templates, orders, and API responses in a PostgreSQL database.

---

## Architecture

The application follows a service-oriented architecture with the following components:

- **React + Redux SPA (Frontend):**
  - Browse postcards
  - Personalize content and design
  - Initiate postcard mailing and payments
  - View final confirmation image of sent postcard
  - Responsive UI built with Bootstrap CSS

- **Node + Express App Server (Backend):**
  - Handles API orchestration (Lob, Stripe, Google)
  - Manages business logic and database communication
  - Uses Sequelize ORM for secure data access

- **PostgreSQL Database:**
  - Stores HTML postcard templates
  - Tracks orders and their status
  - Records responses from the Lob API

- **Third Party Services:**
  - **Lob API**: Prints and mails the postcard, provides confirmation image
  - **Stripe API**: Processes credit card payments
  - **Google OAuth**: Enables user login and session management

---

## Technologies Used

- **Frontend:** React, Redux, Bootstrap, JavaScript (ES6+)
- **Backend:** Node.js, Express.js, Sequelize ORM
- **Database:** PostgreSQL
- **Authentication:** Google OAuth
- **Payments:** Stripe API
- **Direct Mail Service:** Lob API
- **Architecture:** RESTful API design, SPA, MVC pattern

---

## Why Easycard?

- Demonstrates my ability to integrate third-party services in a production-ready architecture.
- Emphasizes thoughtful UX/UI design for non-technical users.
- Showcases fullstack development from database design to API management to frontend state handling.
- Built as a professional-grade portfolio project with real-world commercial potential.

---

## Diagram

The diagram above illustrates how Easycard brings together multiple technologies and services into a single cohesive experience, from user interaction to postcard delivery.

---

## About the Developer

👩‍💻 **Melinda Armbruster**  
Frontend-focused Fullstack Software Engineer  
3.5+ years of experience building customer-facing web applications  
Based in Tennessee | [LinkedIn](#) | [Portfolio](#)

---

## Future Enhancements

- Add user dashboard for managing previous orders
- Enable image uploads and rich text customization
- Build admin tools for template management
- International mailing support
- Optimize mobile layout further


