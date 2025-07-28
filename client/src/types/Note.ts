export interface Nt {
  title: string;
  content: string;
}

export interface BackNt extends Nt {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface NoteListProps {
  onEdit: (id: string) => void;
}

export interface NoteProps extends Nt, NoteListProps {
  id: string;
  onDelete: (id: string) => void;
}

export interface AddNoteProps {
  noteBeingEdited: string | null;
  onDoneEditing: () => void;
}
