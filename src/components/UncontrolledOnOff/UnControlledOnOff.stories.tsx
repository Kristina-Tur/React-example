import {action} from '@storybook/addon-actions';

import React, {useState} from 'react';
import {UnControlledOnOff} from './UnControlledOnOff';

export default {
    component: UnControlledOnOff,
};



export const OnMode = () => <UnControlledOnOff default={true}/>
export const OffMode = () => <UnControlledOnOff default={false}/>
export const ModeChanging = () => <UnControlledOnOff/>
export const DefaultInputValue = () => <input defaultValue={'yo'} />