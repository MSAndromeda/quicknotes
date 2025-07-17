const NoteItem = ({ note, onDelete, onEdit }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="font-bold text-xl">{note.title}</h2>
    <p className="mt-2 text-gray-700">{note.content}</p>
    <div className="mt-4 flex gap-2">
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  </div>
);
