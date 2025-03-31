import React from "react";
import Button from "../Button";
import './style.scss'

class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="task">Matéria</label>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="O que você gostaria de estudar?"
            required
          ></input>
        </div>

        <div className="inputContainer">
          <label htmlFor="">Tempo</label>
          <input
            type="time"
            id="time"
            name="time"
            step="1"
            min="00:00:00"
            max="08:00:00"
            required
          ></input>
        </div>

        <Button />
      </form>
    );
  }
}

export default Form;
