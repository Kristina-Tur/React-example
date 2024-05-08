import React from 'react';

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h2 onClick={() => {props.onClick(!props.collapsed)}}>{props.title}</h2>
    );
}