# QuickNotes Client

This is the frontend for the QuickNotes application, built with React, Vite, and TailwindCSS. It provides a fast, modern, and responsive user interface for managing notes via the backend API.

---

## 📦 Project Structure

```
client/
├── src/
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # TailwindCSS styles
│   ├── assets/            # Static assets
│   ├── components/        # Reusable UI components
│   │   ├── AddNote.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Note.jsx
│   │   └── NoteList.jsx
│   └── pages/             # (Reserved for future routing)
├── public/
│   └── vite.svg           # Favicon
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Run the Development Server

```sh
npm run dev
```

Frontend runs on [http://localhost:5173](http://localhost:5173) by default.

---

## 🛠️ Technologies Used

- **React** (with hooks and functional components)
- **Vite** (fast build tool and dev server)
- **TailwindCSS** (utility-first CSS framework)
- **React Query** (data fetching and caching)
- **Axios** (HTTP client)
- **ESLint** (code linting)

---

## 🌟 Features

- Create, view, update, and delete notes
- Responsive design with dark mode toggle
- Instant UI updates via React Query
- Accessible and semantic markup

---

## 🔗 API Integration

The frontend communicates with the backend REST API at `http://127.0.0.1:3000/api/notes`.  
You can configure the API base URL in the code if your backend runs on a different port.

---

## 🧑‍💻 Development Scripts

- **Start dev server:**  
  `npm run dev`
- **Build for production:**  
  `npm run build`
- **Preview production build:**  
  `npm run preview`
- **Lint code:**  
  `npm run lint`

---

## 🧪 Testing

No automated tests yet. You can interact with the app in your browser and verify note operations.

---

## 📚 Learnings

This frontend was built to learn modern React, state management with React Query, and integrating TailwindCSS for rapid UI development.

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

Manas Anand Singh

---

## 📬 Contact

For feedback or collaboration, feel free to reach out!
