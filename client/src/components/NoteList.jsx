const NoteList = ({ notes, onDelete, onEdit }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {notes.map((note) => (
      <NoteItem
        key={note._id}
        note={note}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);
