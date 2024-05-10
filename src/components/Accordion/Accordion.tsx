import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: () => void
}

export function Accordion({titleValue, collapsed, onClick}: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={titleValue} onClick={onClick} collapsed={collapsed}/>
                {!collapsed && <AccordionBody/>}
            </div>
        );
} 