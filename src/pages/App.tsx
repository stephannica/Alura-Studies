import { useState } from "react";
import Form from "../components/Form/index";
import List from "../components/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false
      }))
    );
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            };
          }
          return task;
        }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Stopwatch selected={selected} finishTask={finishTask}/>
      <List tasks={tasks} selectTask={selectTask} />
    </div>
  );
}

export default App;
