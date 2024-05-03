import React, {useState} from 'react';
import {UnControlledAccordionTitle} from './UnControlledAccordionTitle';
import {UnControlledAccordionBody} from './UnControlledAccordionBody';

type AccordionPropsType = {
    titleValue: string,
    /*collapsed: boolean*/
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    const [collapsed, setCollapsed] = useState(true)
        return (
            <div>
                <UnControlledAccordionTitle title={props.titleValue}/>
                <button onClick={() => {setCollapsed(false)}}>Toggle On</button>
                <button onClick={() => {setCollapsed(true)}}>Toggle Off</button>
                {!collapsed && <UnControlledAccordionBody/>}
            </div>
        );
} 