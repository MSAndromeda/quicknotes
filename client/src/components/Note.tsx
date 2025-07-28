import { NoteProps } from "../types/Note";

export default function Note({
  id,
  onEdit,
  onDelete,
  title,
  content,
}: NoteProps) {
  return (
    <article
      role="article"
      aria-label="Note card"
      className="p-4 border border-gray-300 dark:border-gray-700 rounded shadow-sm bg-white dark:bg-gray-800"
    >
      <h3 className="text-lg font-medium mb-1">{title || "Untitled Note"}</h3>
      <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
        {content || "No content available."}
      </p>
      <div className="flex space-x-2">
        <button
          type="button"
          aria-label="Edit note"
          onClick={() => onEdit(id)}
          className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:ring"
        >
          Edit
        </button>
        <button
          type="button"
          aria-label="Delete note"
          onClick={() => onDelete(id)}
          className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
