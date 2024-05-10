import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {UnControlledAccordion} from './UnControlledAccordion';
import {UnControlledAccordionTitle} from './UnControlledAccordionTitle';
import {UnControlledAccordionBody} from './UnControlledAccordionBody';

export default {
    component: UnControlledAccordion,
};

const callback = action('on or off clicked')

export const UnControlledAccordionCollapsed = () => <div>
    <UnControlledAccordionTitle
        title={'Collapsed'} onClick={callback}
    />
    {false && <UnControlledAccordionBody/>}
</div>

export const UnControlledAccordionOpen = () => <div>
    <UnControlledAccordionTitle
        title={'Open'} onClick={callback}
    />
    {true && <UnControlledAccordionBody/>}
</div>


export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return <div>
        <UnControlledAccordionTitle
            title={'Accordion'} onClick={() => setValue(!value)}
        />
        {value && <UnControlledAccordionBody/>}
    </div>
}