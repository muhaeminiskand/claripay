# ClariPay Super App

## Project Overview
ClariPay is an innovative super app designed to simplify financial transactions, providing users with seamless access to various financial services through a single platform. The app focuses on enhancing user experience with intuitive navigation and a comprehensive feature set.

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Docker, deployed on AWS

## Setup Instructions
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/muhaeminiskand/claripay.git
   cd claripay
   ```
2. **Install backend dependencies:**  
   ```bash
   cd backend
   npm install
   ```
3. **Setup environment variables:**  
   Create a `.env` file in the `backend` directory and specify the required environment variables (refer to `.env.example`).
4. **Run backend server:**  
   ```bash
   npm start
   ```
5. **Install frontend dependencies:**  
   ```bash
   cd ../frontend
   npm install
   ```
6. **Run frontend server:**  
   ```bash
   npm start
   ```

## Folder Structure
```
claripay/
├── backend/          # Backend code
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API route definitions
│   ├── middleware/    # Custom middleware
│   └── server.js     # Entry point
│
└── frontend/        # Frontend code
    ├── public/       # Public assets
    ├── src/         # React components and logic
    ├── styles/      # CSS styles
    └── App.js       # Main component
```

## Development Guidelines
- Follow the code style guide (use ESLint).
- Ensure to write meaningful commit messages.
- Create separate branches for features or bug fixes.
- Document your code adequately.
- Regularly pull from the main branch to keep your branch updated.

---

> Note: Make sure to check the `CONTRIBUTING.md` file for guidelines on contributing to the project.
