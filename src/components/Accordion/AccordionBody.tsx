import React from 'react';
import {ItemsPropsType} from './Accordion';

type ItemsBodyPropsType = {
    items: ItemsPropsType[]
    onItemClick: (value: number) => void
}

export function AccordionBody(props: ItemsBodyPropsType) {
    console.log('AccordionBody rendering')

    return (
        <ul>
            {props.items.map(item => <li key={item.value} onClick={() => props.onItemClick(item.value)}>{item.title}</li>)}
        </ul>
    );
}