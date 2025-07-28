import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Nt, AddNoteProps, BackNt } from "../types/Note";

function useNote(id: string | null) {
  return useQuery<BackNt, Error>({
    queryKey: ["note", id],
    queryFn: async () => {
      const res = await axios.get(`http://127.0.0.1:3000/api/notes/${id}`);
      return res.data.data.note;
    },
    enabled: !!id,
  });
}

function useUpdateNote() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { id: string | null; note: Nt }>({
    mutationFn: ({ id, note }) =>
      axios.patch(`http://127.0.0.1:3000/api/notes/${id}`, { ...note }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["note", variables.id] });
    },
  });
}

function useCreateNote() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, Nt>({
    mutationFn: (newNote) =>
      axios.post("http://127.0.0.1:3000/api/notes", newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
}

export default function AddNote({
  noteBeingEdited,
  onDoneEditing,
}: AddNoteProps) {
  const { data: existingNote } = useNote(noteBeingEdited);
  const { mutateAsync: createNote } = useCreateNote();
  const { mutateAsync: updateNote } = useUpdateNote();

  const isEditing = !!noteBeingEdited;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const note: Nt = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };
    try {
      if (isEditing) {
        await updateNote({ id: noteBeingEdited, note });
        console.log("Success Updating note");
      } else {
        await createNote(note);
        console.log("Success Creating note");
      }
      form.reset();
      onDoneEditing();
    } catch (err) {
      if (err instanceof Error)
        console.error("Failed to create note: ", err?.message);
    }
  }
  return (
    <section
      aria-labelledby="create-note-heading"
      className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 id="create-note-heading" className="text-xl font-semibold mb-4">
        {isEditing ? "Edit Note" : "Create a New Note"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-label="Note creation form"
      >
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={existingNote?.title || ""}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            defaultValue={existingNote?.content || ""}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring"
        >
          {isEditing ? "Update Note" : "Add Note"}
        </button>
      </form>
    </section>
  );
}
