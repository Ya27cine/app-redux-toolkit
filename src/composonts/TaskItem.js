const TaskItem = (props) => {
  const { task, toggleTask, deleteTask } = props;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        {task.text}
        <span
          onClick={() => deleteTask(task.id)}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
        <span style={{fontSize: "13px", color: "red", padding: "1em"}}>
        {task.done ? task.date : ''}
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
