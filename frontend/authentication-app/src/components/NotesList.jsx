import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const url = "http://localhost:8000/api/notes/";

  useEffect(() => {
    let isMounted = true;
    const fetchNotes = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setNotes(response.data);
    };
    if (isMounted) {
      fetchNotes();
    }
    return () => (isMounted = false);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`url${id}`);
      let updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container row mx-auto mt-2">
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <article key={note.id} className="card col-md-4 mb-2">
              <section className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.body}</p>
                <button
                  className="card-link"
                  onClick={() => handleDelete(note.id)}
                >
                  delete
                </button>
                <Link to={`/notes/${note.id}`}></Link>
              </section>
            </article>
          );
        })
      ) : (
        <section className="mt-5 shadow-lg w-75 mx-auto rounded-5 p-5">
          <h2 className="text-center p-5">No Notes availble at the moment</h2>
        </section>
      )}
    </section>
  );
};

export default NotesList;
