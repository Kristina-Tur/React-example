import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: () => void
    items: ItemsPropsType[]
    onItemClick: () => void
}
export type ItemsPropsType = {
    value: number
    title: string
}

export function Accordion({titleValue, collapsed, onClick, items, onItemClick}: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={titleValue} onClick={onClick}/>
                {!collapsed && <AccordionBody items={items} onItemClick={onItemClick}/>
            }
            </div>
        );
} 