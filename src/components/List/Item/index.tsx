import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface ItemProps extends ITask{
  selectTask: (selectedTask: ITask) => void
}

export default function Item({ task, time, selected, completed, id, selectTask }: ItemProps) {
  return (
    <li className={`${style.item} ${selected ? style.selectedItem : ''}`}
    onClick={() => selectTask({
      task,
      time,
      selected,
      completed,
      id
    })}
    >
      <h3> {task} </h3>
      <span> {time} </span>
    </li>
  );
}
