import React from 'react';

type AccordionTitlePropsType = {
    title: string
}
export function UnControlledAccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h2>{props.title}</h2>
    );
}