import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default {
    component: Accordion,
};


const onClickHandler = action('onClick')

export const CollapsedAccordion = () => {
    return <div>
        <Accordion
            titleValue={'Collapsed Accordion'}
            onClick={onClickHandler}
            collapsed={true}/>
    </div>
}

export const OpenedAccordion = () => {
    return <div>
        <Accordion
            titleValue={'Opened Accordion'}
            onClick={() => {   }}
            collapsed={false}/>
    </div>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <div>
        <Accordion
            titleValue={'AccordionDemo'}
            onClick={() => {
                setCollapsed(!collapsed)
            }}
            collapsed={collapsed}/>
    </div>
}