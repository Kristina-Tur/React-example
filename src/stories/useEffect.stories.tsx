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
;