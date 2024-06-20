import * as React from 'react';
import {useMemo, useState} from "react";

export default {
    title: 'useState Demo'
}

function generateData(){
    console.log('generateData')
    return 12345
}

export const UseStateStories = () => {
    const [count, setCount] = useState(0);

    console.log(count); // Выводит 0

    ;


    /*const [counter, setCounter] = useState(generateData)
    console.log(counter)*/

    /*const initValue = useMemo(generateData, [])*/

    return (

        <div>
            <button onClick={() => {setCount(count + 1); console.log(count)}/*setCounter(state => state + 1)*/}>+</button>
            {count}

        </div>
    );
};