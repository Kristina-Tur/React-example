import React from 'react';

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: () => void
}
export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h2 onClick={(event) => {props.onClick()}}>{props.title}</h2>
    );
}