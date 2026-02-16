// компонент одной задачи
function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="task">
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>
      </div>

      <button
        className="delete"
        onClick={() => onDelete(task.id)}
      >
        удалить
      </button>
    </li>
  );
}

export default TaskItem;
