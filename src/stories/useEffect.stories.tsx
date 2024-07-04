import * as React from 'react';
import {useEffect, useMemo, useRef, useState} from "react";

export default {
    title: 'useEffect Demo'
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

export const ResetUseEffectStories = () => {
    const [count, setCount] = useState(0);

    console.log('ResetUseEffectStories ' + count);

    useEffect(() => {
        console.log('useEffect render');
        return () => {
            console.log('Reset ' + count)
        }
    }, [count]);


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
        </div>
    );
};

export const KeyTrackUseEffectStories = () => {
    const [text, setText] = useState('');

    console.log('Component' + text);

    useEffect(() => {
        console.log('useEffect render');
        const handler = (e: KeyboardEvent) => {
            setText(state => state + e.key)
            console.log(e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            console.log('Reset ' + text)
            window.removeEventListener('keypress', handler)
        }
    }, []);


    return (
        <div>
            Text: {text}
        </div>
    );
};