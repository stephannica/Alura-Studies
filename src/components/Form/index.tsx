import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Matéria</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você gostaria de estudar?"
          required
        ></input>
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="">Tempo</label>
        <input
          type="time"
          id="time"
          name="time"
          step="1"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min="00:00:00"
          max="08:00:00"
          required
        ></input>
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;