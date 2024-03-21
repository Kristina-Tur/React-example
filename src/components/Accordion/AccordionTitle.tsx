import React from 'react';

export function AccordionTitle(props: any) {
    console.log('AccordionTitle rendering')
    return (
        <h2>{props.title}</h2>
    );
}