import React from 'react';
import {RatingType} from './Rating';

type StarPropsType = {
    selected: boolean
    value: RatingType
    onClick: (value: RatingType) => void
}
export function Star(props: StarPropsType) {
    console.log('Star rendering');
    return <span onClick={() => props.onClick(props.value)}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}