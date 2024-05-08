import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
export function UnControlledAccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h2 onClick={props.onClick}>{props.title}</h2>
    );
}