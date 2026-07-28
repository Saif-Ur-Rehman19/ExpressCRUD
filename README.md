# Task Manager API

A lightweight, robust Node.js and Express RESTful API with MongoDB (Mongoose) integration for full CRUD (Create, Read, Update, Delete) management of tasks.

---

## 🚀 Features

- **Get All Tasks**: Retrieve a list of all stored tasks.
- **Create Task**: Add new tasks with built-in validation (name required, maximum 20 characters).
- **Get Task**: Fetch a single task by its unique MongoDB ID.
- **Update Task**: Modify task properties (name, completion status) with schema validation.
- **Delete Task**: Remove a task by its unique MongoDB ID.
- **Environment Driven**: Secure database connection string using `dotenv`.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Dev Tooling**: `nodemon` for auto-reloading during development

---

## 📁 Project Structure

```text
TaskManager/
├── controllers/
│   └── tasks.js      # Controller logic for task CRUD operations
├── db/
│   └── connect.js    # Mongoose MongoDB connection configuration
├── models/
│   └── Task.js       # Mongoose Schema & Model for Task
├── routes/
│   └── tasks.js      # Express router mapping endpoints to controllers
├── .env              # Environment variables (DB connection string)
├── .gitignore        # Git ignore settings
├── app.js            # Main application entry point
├── package.json      # Project metadata & dependencies
└── README.md         # Project documentation
```

---

## 📋 Data Model (Task Schema)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `String` | Yes | Task title/description (max 20 characters, trimmed) |
| `completed` | `Boolean` | No | Completion status (default: `false`) |

---

## 🔗 API Endpoints

Base URL: `http://localhost:3000/api/v1/tasks`

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/tasks` | Get all tasks | None |
| **POST** | `/api/v1/tasks` | Create a new task | `{ "name": "Buy groceries" }` |
| **GET** | `/api/v1/tasks/:id` | Get single task by ID | None |
| **PATCH** | `/api/v1/tasks/:id` | Update task by ID | `{ "completed": true }` |
| **DELETE** | `/api/v1/tasks/:id` | Delete task by ID | None |

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) instance (Local or MongoDB Atlas)

### 2. Clone the Repository
```bash
git clone https://github.com/Saif-Ur-Rehman19/ExpressCRUD.git
cd ExpressCRUD
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/TaskManager?retryWrites=true&w=majority
```

### 5. Run the Application

**Development Mode (with Nodemon):**
```bash
npm start
```

The server will start listening on **`http://localhost:3000`**.
