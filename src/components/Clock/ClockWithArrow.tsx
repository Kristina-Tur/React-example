import {useEffect, useRef, useState} from "react";
import * as React from "react";
import './styleClockWithArrow.css'

export const ClockWithArrow = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    return (
        <div className="clock">
            <div className="clock-face">
                <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }}></div>
                <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }}></div>
                <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>
            </div>
        </div>
    );
}