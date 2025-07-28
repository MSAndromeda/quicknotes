import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import Note from "./Note";
import { BackNt, NoteListProps } from "../types/Note";

function useNotes() {
  return useQuery<BackNt[], Error>({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axios.get("http://127.0.0.1:3000/api/notes");
      return res.data.data.notes;
    },
  });
}

function useDeleteNote() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: (id) => axios.delete(`http://127.0.0.1:3000/api/notes/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
}

export default function NoteList({ onEdit }: NoteListProps) {
  const { data: notes, isLoading, error } = useNotes();
  const { mutateAsync: deleteNote } = useDeleteNote();

  async function handleDelete(id: string): Promise<void> {
    try {
      if (!!id) {
        await deleteNote(id);
        console.log("Note deleted");
      }
    } catch (err) {
      if (err instanceof Error)
        console.error("Failed to delete Note: ", err?.message);
    }
  }

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!notes) return <p>No notes found.</p>;

  return (
    <section aria-labelledby="notes-list-heading" className="space-y-4">
      <h2 id="notes-list-heading" className="text-xl font-semibold mb-2">
        Your Notes
      </h2>
      {notes.map((note: BackNt) => (
        <Note
          key={note._id}
          id={note._id}
          onEdit={onEdit}
          onDelete={handleDelete}
          title={note.title}
          content={note.content}
        />
      ))}
    </section>
  );
}
