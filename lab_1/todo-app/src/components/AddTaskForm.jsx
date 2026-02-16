import { useState } from "react";

// компонент формы добавления задачи
function AddTaskForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onAdd(input);
    setInput("");
  };

  return (
    <form className="input-block" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="новая задача"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        добавить
      </button>
    </form>
  );
}

export default AddTaskForm;
