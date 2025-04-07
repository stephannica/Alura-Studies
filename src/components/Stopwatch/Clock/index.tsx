import style from "./Clock.module.scss"

interface ClockProps {
    time: number | undefined;
}

export default function Clock({time = 0} : ClockProps){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesTens, minutesUnits] = String(minutes).padStart(2, '0')
    const [secondsTens, secondsUnits] = String(seconds).padStart(2, '0')
    return(
        <>
            <span className={style.clockNumber}>{minutesTens}</span>
            <span className={style.clockNumber}>{minutesUnits}</span>
            <span className={style.clockSeparator}>:</span>
            <span className={style.clockNumber}>{secondsTens}</span>
            <span className={style.clockNumber}>{secondsUnits}</span>
        </>
    )
}