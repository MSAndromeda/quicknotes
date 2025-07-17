const API = "http://localhost:5000/api/notes";

const getNotes = async () => await axios.get(API);
const addNote = async (note) => await axios.post(API, note);
const deleteNote = async (id) => await axios.delete(`${API}/${id}`);
const updateNote = async (id, note) => await axios.put(`${API}/${id}`, note);
