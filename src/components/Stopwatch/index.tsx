import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

interface StopwatchProps {
    selected: ITask | undefined;
}

export default function Stopwatch({selected} : StopwatchProps) {
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}