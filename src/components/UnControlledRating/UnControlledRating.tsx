import React, {useState} from 'react';
import {UnControlledStar} from './UnControlledStar';

type RatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
}
export function UnControlledRating(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)
     return (
        <div>
            <UnControlledStar selected={value > 0} setValue={setValue} value={1}/>
            <UnControlledStar selected={value > 1} setValue={setValue} value={2}/>
            <UnControlledStar selected={value > 2} setValue={setValue} value={3}/>
            <UnControlledStar selected={value > 3} setValue={setValue} value={4}/>
            <UnControlledStar selected={value > 4} setValue={setValue} value={5}/>

           {/* можно так писать
            <UnControlledStar selected={value > 0} setValue={() => {setValue(1)}}/>
            или так. Как мне удобнее
            <UnControlledStar selected={value > 0} setValue={setValue} value={2}/>*/}
        </div>
    );
}

