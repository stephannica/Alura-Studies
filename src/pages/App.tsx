import { useState } from "react";
import Form from "../components/Form/index";
import List from "../components/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Stopwatch />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
