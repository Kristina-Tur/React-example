import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
} 