import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddNote from "./components/AddNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [noteBeingEdited, setNoteBeingEdited] = useState<string | null>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <Header />
        <main className="max-w-7xl mx-auto p-4" role="main">
          <AddNote
            noteBeingEdited={noteBeingEdited}
            onDoneEditing={() => setNoteBeingEdited(null)}
          />
          <NoteList onEdit={setNoteBeingEdited} />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
