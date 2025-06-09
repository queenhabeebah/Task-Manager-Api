# 📝 Task Manager API

This is a **Task Manager RESTful API** built with **Node.js**, **Express**, and **MongoDB**.  
It allows users to **create**, **read**, **update**, and **delete** tasks. It’s structured for scalability and follows best practices.

---

## 🚀 Features

- Create a new task
- View all tasks
- View a single task by ID
- Update a task
- Delete a task
- MongoDB for data storage
- Organized MVC folder structure
- CORS enabled for cross-origin requests
- `.env` file for environment variables
- JSON responses for all routes

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- cors
- Nodemon (for development)

---

## 📁 Project Structure

``` bash
task-manager-api/
├── server/
│   ├── config/
│   │   └── db.js             # MongoDB connection setup
│   ├── controllers/
│   │   └── taskController.js # Logic for handling task routes
│   ├── models/
│   │   └── taskModel.js      # Task schema definition
│   ├── routes/
│   │   └── taskRoutes.js     # API routes for task operations
│   ├── .env                  # Environment variables (not pushed to Git)
│   ├── .gitignore            # Ignored files/folders for Git
│   ├── package.json          # Project metadata and scripts
│   └── server.js             # Main entry point of the backend
```

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/queenhabeebah/task-manager-api.git

# 2. Navigate into the folder
cd task-manager-api/server

# 3. Install dependencies
npm install

# 4. Create a .env file
```
## 🧪 .env Example
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
## ▶️ Running the Server
```bash
# Development
npm run dev

# Production
npm start
```
Server will run on: http://localhost:5000

## 📮 API Endpoints
 
| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| GET    | `/api/tasks/:id` | Get a single task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## 🧠 Future Improvements

- Add user authentication (JWT)

- Connect to a frontend (React)

- Add pagination, filtering, search

- Add unit & integration testing

## 🧕 Author

Habeebah Aleilo

🔗 [GitHub](https://github.com/queenhabeebah)
| [LinkedIn](https://www.linkedin.com/in/habeebahaleilo)

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---

Let me know if you’d like:
- A sample **API response** section  
- A **Postman collection** for testing  
- Help writing the **`LICENSE`** file  

Once you’re done, you can push the project and README to GitHub with pride. Let’s move to the next one when you’re ready 🚀

### Live API

[Task-Manager-API](https://task-manager-api-server-only.onrender.com/)
