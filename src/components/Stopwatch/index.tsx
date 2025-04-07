import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

interface StopwatchProps {
    selected: ITask | undefined;
    finishTask: () => void;
}

export default function Stopwatch({selected, finishTask} : StopwatchProps) {
    const [time, setTime] = useState<number>();
    
    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function countdown(time: number = 0) {
        setTimeout(() => {
            if(time > 0) {
                setTime(time - 1);
                return countdown(time - 1);
            }
            finishTask();
        }, 1000)
    }
    return(
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => countdown(time)}>
                Começar!
            </Button>
        </div>
    )
}