# QuickNotes Server

This is the backend server for the QuickNotes application, built with Node.js, Express.js, and MongoDB. It provides a RESTful API for managing notes.

---

## 📦 Project Structure

```
server/
├── app.js                # Express app setup
├── server.js             # Entry point, DB connection
├── config.env            # Environment variables (use your own)
├── example.env           # Example env file
├── package.json          # Dependencies and scripts
├── controllers/
│   └── noteController.js # Note CRUD logic
├── dev-data/
│   ├── data.json         # Sample notes data
│   └── import-dev-data.js# Data import/delete script
├── models/
│   └── Note.js           # Mongoose Note schema
├── routes/
│   └── notesRoute.js     # Notes API routes
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Configure Environment

Copy `example.env` to `config.env` and fill in your MongoDB URI and desired port:

```
MONGO_URI=yourMongoDBConnectionStringHere
PORT=8000
```

### 3. Run the Server

```sh
npm run dev
```

Server runs on `http://localhost:8000` (or your configured port).

---

## 🗃️ API Endpoints

Base URL: `/api/notes`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Get all notes     |
| GET    | `/:id`   | Get a single note |
| POST   | `/`      | Create a new note |
| PATCH  | `/:id`   | Update a note     |
| DELETE | `/:id`   | Delete a note     |

All notes have `title`, `content`, and timestamps.

---

## 🧑‍💻 Development Scripts

- **Start server (dev mode):**
  ```sh
  npm run dev
  ```
- **Import sample notes:**
  ```sh
  npm run import-data
  ```
- **Delete all notes:**
  ```sh
  npm run delete-data
  ```

---

## 📝 Data Model

**Note**

```js
{
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- cors
- nodemon (dev)

---

## 🧪 Testing

No automated tests yet. You can use tools like Postman or VS Code REST Client to test endpoints.

---

## 📚 Learnings

This backend was built for learning REST API design, CRUD operations, and MongoDB integration with Mongoose.

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

Manas Anand Singh

---

## 📬 Contact

For feedback or collaboration, feel free
