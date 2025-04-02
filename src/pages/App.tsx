import React from "react";
import Form from "../components/Form/index"
import List from "../components/List";
import style from './App.module.scss'
import Stopwatch from "../components/Stopwatch";

function App() {
  return <div className={style.AppStyle}>
    <Form/>
    <Stopwatch/>
    <List/>
  </div>;
}

export default App;
