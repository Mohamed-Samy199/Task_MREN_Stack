# Student Quizzes & Announcements Dashboard

##  Overview
This is a **full-stack application** that presents **student quizzes** and **announcements** data for the current semester.  
The project is built using:
- **Frontend:** React.js, Redux, Material UI, i18n
- **Backend:** Express.js, MongoDB, Mongoose

The app provides:
- A **dashboard** for logged-in users
- Full **CRUD operations** for quizzes and announcements
- Responsive UI for all screen sizes
- Support for future multi-language translation

---

##  Features

### **Frontend**
- **Login/Logout** system without credentials (for demo purposes).
- **RequireAuth HOC** to protect dashboard routes (redirects unauthenticated users to the home page).
- **Responsive design** compatible with all devices.
- **Material UI** components for modern UI design.
- **Sidebar hover effect** (background & text color change).
- **i18n-ready** for translations.
- **Reusable components** for better maintainability.

### **Backend**
- **Announcements API**
  - Create, Read, Update, Delete announcements.
- **Quizzes API**
  - Create, Read, Update, Delete quizzes.
- MongoDB + Mongoose schema design for scalable data.
- RESTful architecture following **best practices**.

---

##  Tech Stack
**Frontend**
- React.js + Redux
- Material UI
- React Router
- i18next (for translations)

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- CORS, dotenv, JWT

## ⚙️ Installation & Setup

### **Backend**
bash
cd server
npm install
npm run dev


Backend runs on: http://localhost:5000

Frontend
cd client
npm install
npm start


Frontend runs on: http://localhost:3000

API Endpoints
Announcements

GET /announcements → Get all announcements

POST /announcements → Create a new announcement

PUT /announcements/:id → Update announcement

DELETE /announcements/:id → Delete announcement

Quizzes

GET /quiz → Get all quizzes

POST /quiz → Create new quiz

PUT /quiz/:id → Update quiz

DELETE /quiz/:id → Delete quiz

Auth

POST /auth → create and login user

Notes

The login system here is for demonstration only (no username/password).

All authentication-protected routes use RequireAuth HOC.

The app is designed to be easily extendable for real authentication & multi-language support.




Author
Muhammad El Kattan
Frontend & Backend Developer (MERN Stack)