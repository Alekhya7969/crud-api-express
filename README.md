# 🔐 JWT-Protected Express.js CRUD API with File-Based Storage

This project implements a secure backend CRUD API using **Express.js**, **pure Node modules**, and **JWT authentication**, following the **MVVM architecture**. All data is stored in a local `items.json` file — no external database required.

---

## 🚀 Features

- ✅ Full CRUD (Create, Read, Update, Delete) on `items.json`
- ✅ MVVM Pattern (Model-View-ViewModel)
- ✅ Token-protected endpoints (JWT-based)
- ✅ Pure ES Modules (no CommonJS)
- ✅ UI for interacting with backend (HTML/CSS/JS)
- ✅ Express.js-based server
- ✅ Modular, readable codebase

---

## 📂 Folder Structure

```
crud-api-express/
│
├── data/
│   └── items.json           # File-based item database
│
├── public/
│   ├── index.html           # Home page
│   ├── create.html          # Create item page
│   ├── read.html            # List items
│   ├── update.html          # Update item
│   └── delete.html          # Delete item
│
├── utils/
│   ├── itemModel.js         # File-based storage logic
│   ├── itemViewModel.js     # Interface layer with pure functions
│   └── auth.js              # JWT verification logic
│
├── .env                     # Environment variables
├── app.js                   # Main Express server
└── README.md                # You're here!
```

---

## 🔐 JWT Authentication

All **write operations** (`POST`, `PUT`, `DELETE`) require a valid JWT token.

### ✅ Use this token for testing:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGVtb1VzZXIiLCJpYXQiOjE3NDYzMzQ2MDgsImV4cCI6MjA2MTkxMDYwOH0.FW1UBM7kSFe5T8BWeRu6fa15U-5GTj78VvzkB16RIb8
```

Paste it in the JWT field on the UI pages when performing Create, Update, or Delete actions.

---

## 🖥️ Running Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Create a `.env` file

```env
JWT_SECRET=your_secret_key_here
```

> Tip: If you use the above token, use `your_secret_key_here = secret` (the one it was signed with).

### 3. Start the Server

```bash
npm start
```

### 4. Visit the UI

Open [http://localhost:3000](http://localhost:3000)

---

## 📬 API Endpoints

| Method | Endpoint           | Description              | JWT Required |
|--------|--------------------|--------------------------|--------------|
| GET    | `/api/items`       | Get all items            | ❌ No         |
| POST   | `/api/items`       | Create a new item        | ✅ Yes        |
| PUT    | `/api/items/:id`   | Update item by ID        | ✅ Yes        |
| DELETE | `/api/items/:id`   | Delete item by ID        | ✅ Yes        |

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JWT (`jsonwebtoken`)
- Vanilla JavaScript (frontend)
- dotenv
- UUID

---

## 🧠 Architecture: MVVM

- **Model**: `itemModel.js` handles file operations
- **ViewModel**: `itemViewModel.js` exposes clean pure functions
- **View**: `public/*.html` files interact with the backend via fetch()

---

## 📢 Notes

- This project is intended for **local use only** or deployment to platforms that allow file system writes (e.g., **Render**, **Railway**). Netlify does **not** support runtime file writes.
- Make sure the JWT token and secret are consistent across `.env` and frontend.

---

## 👨‍💻 Author

Developed by [Alekhya Duggirala]
