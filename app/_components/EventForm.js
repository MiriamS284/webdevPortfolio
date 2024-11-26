"use state";

import { useState } from "react";

export default function EventForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { title, start: new Date(start), end: new Date(end) };
    await onSave(newEvent);
    setTitle("");
    setStart("");
    setEnd("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titel"
        required
      />
      <input
        type="datetime-local"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Termin hinzufügen
      </button>
    </form>
  );
}
