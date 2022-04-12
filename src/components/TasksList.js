import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux";
import TaskItem from "./TaskItem";


const TasksList = (props) => {

  const tasks = useSelector(state => state.todo)
  const dispatch = useDispatch();


  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
