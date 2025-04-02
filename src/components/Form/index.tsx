import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log('state: ', this.state)
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Matéria</label>
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={event => this.setState({...this.state, task: event.target.value})}
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
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value})}
            min="00:00:00"
            max="08:00:00"
            required
          ></input>
        </div>

        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
