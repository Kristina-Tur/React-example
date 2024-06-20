import * as React from 'react';
import {useEffect, useMemo, useRef, useState} from "react";

export default {
    title: 'useState Demo'
}


export const UseEffectStories = () => {
    const [count, setCount] = useState(0);

    console.log(count);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString()
    });
    useEffect(() => {
        console.log('useEffect only first render');
        document.title = count.toString()
    }, []);
    useEffect(() => {

        console.log('useEffect first render and every count change');
        document.title = count.toString()
    }, [count]);


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
        </div>
    );
};

export const UseEffectSetTimeOutStories = () => {
    const [count, setCount] = useState(0);
    const [fake, setFake] = useState(0);

    console.log('Components');

    /* useEffect(() => {
         console.log('useEffect setTimeout');
         setTimeout(() => {
             document.title = count.toString()
         }, 3000)
     }, [count]);*/
    useEffect(() => {
        console.log('useEffect setTimeout');
        setInterval(() => {
            setCount(state => state + 1)
        }, 1000)
    }, []);


    return (
        <div>
            {/*<button onClick={() => setCount(count + 1)}>+count  </button>
            <button onClick={() => setFake(fake + 1)}>+ fake </button>*/}
            {count}
            {/*{fake}*/}
        </div>
    );
};

export const Clock = () => {
        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        const [secondsState, setSecondsState] = useState(seconds);
        const [minutesState, setMinutesState] = useState(minutes);
        const [hoursState, setHoursState] = useState(hours);

        useEffect(() => {
            setInterval(() => {
                seconds++
                if (seconds === 60) {
                    minutes++
                    seconds = 0
                }
                if (minutes === 60) {
                    hours++
                    minutes = 0
                }
                if (hours === 24) {
                    hours = 0
                }
                setSecondsState(seconds)
                setMinutesState(minutes)
                setHoursState(hours)
            }, 1000)
        }, []);


        return (
            <div>
                {hoursState}:{minutesState}:{secondsState}
            </div>
        );
    }
;