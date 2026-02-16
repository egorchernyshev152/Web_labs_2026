import TaskItem from "./TaskItem";

// компонент списка задач
function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="empty">нет задач</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TaskList;
