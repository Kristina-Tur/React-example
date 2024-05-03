import React, {useState} from 'react';
import {UnControlledStar} from './UnControlledStar';

type RatingPropsType = {
    /*value: 0 | 1 | 2 | 3 | 4 | 5*/
}
export function UnControlledRating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState(0 | 1 | 2 | 3 | 4 | 5)
     return (
        <div>
            <UnControlledStar selected={value > 5}/>
            <button onClick={() => {setValue(5)}}>+</button>
            <UnControlledStar selected={value > 4}/>
            <button onClick={() => {setValue(4)}}>+</button>
            <UnControlledStar selected={value > 3}/>
            <button onClick={() => {setValue(3)}}>+</button>
            <UnControlledStar selected={value > 2}/>
            <button onClick={() => {setValue(2)}}>+</button>
            <UnControlledStar selected={value > 1}/>
            <button onClick={() => {setValue(1)}}>+</button>
        </div>
    );
}

