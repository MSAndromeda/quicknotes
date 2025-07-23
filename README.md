# QuickNotes

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates how to connect a modern frontend with a RESTful backend and database.

---

## 📁 Folder Structure

```
quicknotes/
├── client/   # React frontend (Vite + TailwindCSS)
├── server/   # Node.js + Express + MongoDB backend
├── README.md # Global project documentation
```

---

## 🚀 Tech Stack

- **Frontend:** React (Vite), TailwindCSS, React Query, Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Dev Tools:** ESLint, Nodemon, dotenv, CORS

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/quicknotes.git
cd quicknotes
```

### 2. Backend Setup

```sh
cd server
cp example.env config.env   # Add your MongoDB URI and PORT
npm install
npm run dev
```

- The backend runs on [http://localhost:3000](http://localhost:3000)

### 3. Frontend Setup

```sh
cd client
npm install
npm run dev
```

- The frontend runs on [http://localhost:5173](http://localhost:5173)

---

## 🗃️ Database Seeding (Optional)

To load sample notes:

```sh
cd server
npm run import-data
```

To delete all notes:

```sh
npm run delete-data
```

Sample data is in [`server/dev-data/data.json`](server/dev-data/data.json).

---

## 📌 Features

### Core

- Create, view, update, and delete notes
- Responsive UI with dark mode toggle
- RESTful API for notes management

### Planned/Future

- User authentication (JWT)
- Markdown support
- Search, filter, and categorize notes
- Export notes
- Collaborative editing

---

📁 [Client README](./client/README.md)  
📁 [Server README](./server/README.md)

---

## 🧑‍💻 Author

**Manas Anand Singh**

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 💡 Learnings

This project was built for learning purposes to understand full-stack development, REST API integration, and modern React workflows.

---

## 📞 Contact

Feel free to reach out for feedback or collaboration.
