import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
// главный компонент приложения
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // добавление задачи
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // удаление задачи
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // переключение выполнения
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // фильтрация
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <div className="container">
        <Header title="Список задач" activeCount={activeCount} />


      

        <AddTaskForm onAdd={addTask} />

        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            все
          </button>
          <button
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            активные
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            выполненные
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
