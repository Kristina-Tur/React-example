import {useEffect, useState} from "react";
import * as React from "react";

export const Clock = () => {
    const [state, setState] = useState(new Date());

    useEffect(() => {
        const idInterval = setInterval(() => {
            console.log('Tick')
            setState(new Date())
        }, 1000)
        return () => clearInterval(idInterval)
    }, []);

    const get2digitsString = (num: number) => {
        return num < 10 ? '0' + num : num
    }

    const hours = get2digitsString(state.getHours())
    const minutes = get2digitsString(state.getMinutes())
    const seconds = get2digitsString(state.getSeconds())

    return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
    );
}