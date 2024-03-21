import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
} 