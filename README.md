# QuickNotes App

A simple full-stack note-taking application built with the MERN stack to understand how to connect basic frontend and backend togather and work with both(MongoDB, Express.js, React, Node.js).

## 📁 Folder Structure

```
/
├── client/       # React frontend (Vite)
├── server/       # Node.js + Express + MongoDB backend
└── README.md
```

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Others:** dotenv, cors, nodemon

## ⚙️ Setup Instructions (Development)

### 🔧 Backend Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Create a `.env` file with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

   an example.env file is given in the server folder for help.

3. Install dependencies and run the development server:

   ```bash
   npm install
   npm run dev
   ```

   This starts the backend on `http://localhost:3000`

---

### 🖥️ Frontend Setup

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies and run the Vite development server:

   ```bash
   npm install
   npm run dev
   ```

   This starts the frontend on `http://localhost:5173` by default.

---

### 🗃️ Seeding the Database (Optional)

If you want to load sample notes data into MongoDB:

1. Add your sample data in `server/dev-data/import-dev-data.js`
2. Run the import script:

   ```bash
   npm install
   npm run import-data
   ```

To delete all notes:

    ```bash
    npm run delete-data
    ```

> Make sure the correct database is connected via your `.env` file. See example.env file for more info

---

## 🌱 Project Status

- ✅ Backend setup complete
- ✅ Frontend scaffolded using Vite
- [x] API integration
- [x] Full CRUD functionality
- [x] Deployment

---

## 📌 Features Planned

### 📝 Core Features

- **Create Notes**

  - Users can create new notes with a title and content.
  - Note content supports plain text (with optional support for markdown in the future).

- **View Notes**

  - Display a list of all notes.
  - Each note can be opened individually to see full content.
  - Notes are shown in reverse chronological order using timestamps.

- **Update Notes**

  - Users can edit an existing note.
  - Edited notes retain original timestamps with an "updated at" field.

- **Delete Notes**
  - Users can delete notes permanently from the database.
  - Confirmation prompt before deletion.

---

### 💻 Frontend Features

- **Responsive UI**

  - Fully responsive layout across desktop, tablet, and mobile devices.
  - Clean, minimalistic design focused on productivity.

- **Loading and Error States**

  - Proper feedback during data fetching and submission.
  - Error handling for failed requests or empty states.

- **Dark Mode (Optional)**
  - Toggle between light and dark themes for user comfort.

---

### 🔐 Backend Features

- **REST API**

  - Built using Node.js and Express.
  - CRUD routes for managing notes (`/api/notes`).

- **MongoDB Integration**

  - Notes stored in MongoDB using Mongoose.
  - Schema includes `title`, `content`, `createdAt`, and `updatedAt`.

- **Environment Variables**
  - Configuration using `dotenv` for security and environment-specific settings.

---

### 👤 User Authentication (Optional)

- Register and login system with JWT-based authentication.
- Notes linked to individual users.
- Only authenticated users can create/edit/delete their own notes.

---

### ✍️ Markdown Support (Optional)

- Users can write notes using markdown syntax.
- Render markdown into formatted HTML (headings, code blocks, etc).
- Preview pane for real-time markdown rendering.

---

### 📦 Additional Features (Future Scope)

- Search and filter notes by title/content.
- Pin/star important notes.
- Note categories or tags for better organization.
- Export notes as `.txt` or `.md` files.
- Autosave while editing.
- Collaborative note editing (multi-user editing in real-time).

---

## 🧑‍💻 Author

**Manas Anand Singh**  
Feel free to reach out for feedback or collaboration.

---

## 📄 License

This project is licensed under the MIT License.
